import { useState, useEffect, type FormEvent } from "react";
import { useNavigate } from "react-router";
import { Button } from "./Button";
import { Input } from "./Input";
import { useProduct } from "../hooks/useProducts";
import type { Product } from "../models/products";

type FormProps = {
  isEditMode: boolean;
  initialData: Product | null;
};

export function Form({ isEditMode, initialData }: FormProps) {
  const navigate = useNavigate();
  const { registerProduct, updateProduct, categories, isLoading } =
    useProduct();

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [photo, setPhoto] = useState("");
  const [selectedCategoryId, setSelectedCategoryId] = useState("");

  useEffect(() => {
    if (isEditMode && initialData) {
      setName(initialData.nome);
      setPrice(initialData.preco);
      setPhoto(initialData.foto || "");
      if (initialData.categoria) {
        setSelectedCategoryId(initialData.categoria.id.toString());
      }
    }
  }, [isEditMode, initialData]);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const selectedCategory = categories.find(
      (cat) => cat.id === Number(selectedCategoryId)
    );

    if (!selectedCategory) {
      alert("Por favor, selecione uma categoria válida.");
      return;
    }

    const data = {
      nome: name,
      preco: price,
      foto: photo,
      categoria: {
        id: selectedCategory.id,
        nome: selectedCategory.nome,
      },
    };

    try {
      if (isEditMode) {
        await updateProduct(data);
      } else {
        await registerProduct(data);
      }
      navigate("/products");
    } catch (e) {
      console.error("Falha ao submeter formulário:", e);
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-md p-8">
      <form className="space-y-6" onSubmit={handleSubmit}>
        <Input
          legend="Nome do Produto *"
          placeholder="Digite o nome do produto"
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={isLoading}
        />
        <Input
          type="number"
          legend="Preço (R$)*"
          placeholder="Digite o valor do produto"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          disabled={isLoading}
        />

        <div className="flex flex-col gap-2">
          <label htmlFor="categoria" className="font-semibold text-gray-700">
            Categoria *
          </label>
          <select
            id="categoria"
            className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 disabled:opacity-50"
            value={selectedCategoryId}
            onChange={(e) => setSelectedCategoryId(e.target.value)}
            disabled={isLoading || categories.length === 0}
          >
            <option value="" disabled>
              Selecione uma categoria
            </option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.nome}
              </option>
            ))}
          </select>
        </div>

        <Input
          legend="URL da Foto"
          placeholder="https://exemplo.com/foto.jpg"
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
          disabled={isLoading}
        />

        <div className="flex justify-center items-center gap-3">
          <Button
            type="button"
            variant="outline"
            onClick={() => navigate(-1)}
            disabled={isLoading}
          >
            Cancelar
          </Button>
          <Button type="submit" isLoading={isLoading}>
            {isEditMode ? "Salvar Alterações" : "Cadastrar Produto"}
          </Button>
        </div>
      </form>
    </div>
  );
}
