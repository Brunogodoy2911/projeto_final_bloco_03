import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router";
import { Button } from "./Button";
import { Input } from "./Input";
import { AxiosError } from "axios";
import { useProduct } from "../hooks/usePrtoducts";

export function Form() {
  const { registerProduct, categories, isLoading } = useProduct();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [photo, setPhoto] = useState("");
  const [selectedCategoryId, setSelectedCategoryId] = useState("");

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
      await registerProduct(data);
      alert("Produto cadastrado com sucesso!");
      navigate("/products");
    } catch (e) {
      if (e instanceof AxiosError) {
        return alert(e.response?.data.message);
      }
      alert("Não foi possível realizar o cadastro");
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
        />
        <Input
          type="number"
          legend="Preço (R$)*"
          placeholder="Digite o valor do produto"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
        />

        <div className="flex flex-col gap-2">
          <label htmlFor="categoria" className="font-semibold text-gray-700">
            Categoria *
          </label>
          <select
            id="categoria"
            className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            value={selectedCategoryId}
            onChange={(e) => setSelectedCategoryId(e.target.value)}
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
        />

        <div className="flex justify-center items-center gap-3">
          <Button type="button" variant="outline" onClick={() => navigate(-1)}>
            Cancelar
          </Button>
          <Button isLoading={isLoading} type="submit">
            Cadastrar Produto
          </Button>
        </div>
      </form>
    </div>
  );
}
