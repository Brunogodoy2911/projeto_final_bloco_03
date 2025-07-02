import { createContext, useEffect, useState, type ReactNode } from "react";
import { AxiosError } from "axios";
import { api } from "../services/api";
import z, { ZodError } from "zod";
import type { Product } from "../models/products";
import type { Categoria } from "../models/categoria";

type ProductContext = {
  isLoading: boolean;
  products: Product[];
  categories: Categoria[];
  category: Categoria;
  setCategory: (category: Categoria) => void;
  registerProduct: (data: RegisterProductData) => Promise<void>;
  updateProduct: (data: RegisterProductData) => Promise<void>;
  deleteProduct: (productId: number) => Promise<void>;
  addCategory: (data: CategoryFormData) => Promise<void>;
  updateCategory: (id: number, data: CategoryFormData) => Promise<void>;
  deleteCategory: (categoryId: number) => Promise<void>;
};

const productSchema = z.object({
  id: z.number().optional(),
  nome: z
    .string()
    .min(3, { message: "Informe um nome claro para seu produto" }),
  categoria: z.object({
    id: z.number(),
    nome: z.string(),
  }),
  preco: z.coerce
    .number()
    .positive({ message: "Informe um valor válido e superior a 0" }),
  foto: z
    .string()
    .url({ message: "Informe uma URL válida" })
    .or(z.literal(""))
    .optional(),
});

const categorySchema = z.object({
  nome: z.string().min(3, {
    message: "O nome da categoria deve ter no mínimo 3 caracteres.",
  }),
});

type RegisterProductData = z.infer<typeof productSchema>;

type CategoryFormData = z.infer<typeof categorySchema>;

export const ProductContext = createContext({} as ProductContext);

export function ProductProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Categoria[]>([]);
  const [productsByCategory, setProductsByCategory] = useState<Product[]>([]);
  const [category, setCategory] = useState<Categoria>({
    id: 0,
    nome: "Todos",
  });
  const [isLoading, setIsLoading] = useState(false);

  async function fetchProducts() {
    try {
      setIsLoading(true);
      const response = await api.get("/produtos");
      setProducts(response.data ?? []);
    } catch (e) {
      console.log(e);
      if (e instanceof AxiosError) {
        return alert(e.response?.data.message);
      }
      alert("Não foi possível carregar os produtos!");
    } finally {
      setIsLoading(false);
    }
  }

  async function fetchCategories() {
    try {
      const response = await api.get("/categorias");
      setCategories(response.data ?? []);
    } catch (error) {
      console.error("Não foi possível carregar as categorias", error);
    }
  }

  async function registerProduct(data: RegisterProductData) {
    try {
      setIsLoading(true);
      const validatedData = productSchema.parse(data);
      await api.post("/produtos", validatedData);
      fetchProducts();
    } catch (e) {
      if (e instanceof ZodError) {
        alert(e.errors[0].message);
        return;
      }

      alert("Não foi possível cadastrar o produto.");
    } finally {
      setIsLoading(false);
    }
  }

  async function fetchProductsByCategory() {
    try {
      setIsLoading(true);
      if (category.nome === "Todos") {
        const response = await api.get("/produtos");
        setProductsByCategory(response.data ?? []);
        return;
      }
      const response = await api.get(`/categorias/nome/${category.nome}`);
      if (response.data && response.data.length > 0) {
        const categoryObject = response.data[0];
        const productsWithoutCategory = categoryObject.produto;
        const productsWithCategory = productsWithoutCategory.map(
          (product: Product) => ({
            ...product,
            categoria: {
              tipo: categoryObject.tipo,
            },
          })
        );
        setProductsByCategory(productsWithCategory);
      } else {
        setProductsByCategory([]);
      }
    } catch (e) {
      console.log(e);
      if (e instanceof AxiosError) {
        return alert(e.response?.data.message);
      }
      alert("Não foi possível carregar os produtos pela categoria!");
    } finally {
      setIsLoading(false);
    }
  }

  async function deleteProduct(productId: number) {
    try {
      setIsLoading(true);
      await api.delete(`/produtos/${productId}`);
      alert("Produto deletado com sucesso!");
      fetchProducts();
    } catch (e) {
      if (e instanceof AxiosError) {
        alert(
          e.response?.data?.message || "Não foi possível deletar o produto."
        );
        return;
      }
      alert("Não foi possível deletar o produto.");
    } finally {
      setIsLoading(false);
    }
  }

  async function updateProduct(data: RegisterProductData) {
    try {
      setIsLoading(true);
      const validatedData = productSchema.parse(data);

      await api.put("/produtos", validatedData);

      alert("Produto atualizado com sucesso!");
      fetchProducts();
    } catch (e) {
      if (e instanceof ZodError) {
        alert(e.errors[0].message);
        return;
      }
      if (e instanceof AxiosError) {
        const errorMessage = e.response?.data?.message || e.message;
        alert(errorMessage);
        return;
      }
      alert("Não foi possível atualizar o produto.");
    } finally {
      setIsLoading(false);
    }
  }

  async function addCategory(data: CategoryFormData) {
    try {
      setIsLoading(true);
      const validatedData = categorySchema.parse(data);
      await api.post("/categorias", validatedData);
      alert("Categoria cadastrada com sucesso!");
      fetchCategories();
    } catch (e) {
      if (e instanceof ZodError) {
        alert(e.errors[0].message);
      } else {
        alert("Não foi possível cadastrar a categoria.");
      }
    } finally {
      setIsLoading(false);
    }
  }

  async function updateCategory(id: number, data: CategoryFormData) {
    try {
      setIsLoading(true);
      const validatedData = categorySchema.parse(data);
      await api.put("/categorias", { id, ...validatedData });
      alert("Categoria atualizada com sucesso!");
      fetchCategories();
    } catch (e) {
      if (e instanceof ZodError) {
        alert(e.errors[0].message);
      } else {
        alert("Não foi possível atualizar a categoria.");
      }
    } finally {
      setIsLoading(false);
    }
  }

  async function deleteCategory(categoryId: number) {
    if (
      window.confirm(
        "Tem certeza que deseja deletar esta categoria? Isso pode afetar produtos existentes."
      )
    ) {
      try {
        setIsLoading(true);
        await api.delete(`/categorias/${categoryId}`);
        alert("Categoria deletada com sucesso!");
        fetchCategories();
        fetchProducts();
      } catch (e) {
        alert(
          "Não foi possível deletar a categoria. Verifique se não há produtos associados a ela."
        );
      } finally {
        setIsLoading(false);
      }
    }
  }

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchProductsByCategory();
  }, [category.nome]);

  return (
    <ProductContext.Provider
      value={{
        isLoading,
        products,
        categories,
        category,
        setCategory,
        registerProduct,
        deleteProduct,
        updateProduct,
        addCategory,
        deleteCategory,
        updateCategory,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
