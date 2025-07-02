import { useState, useEffect, type FormEvent } from "react";
import { useNavigate, useParams } from "react-router";
import { useProduct } from "../hooks/useProducts";
import type { Categoria } from "../models/categoria";
import { Button } from "./Button";
import { Input } from "./Input";

type FormProps = {
  isEditMode: boolean;
  initialData: Categoria | null;
};

export function CategoryForm({ isEditMode, initialData }: FormProps) {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addCategory, updateCategory, isLoading } = useProduct();

  const [nome, setNome] = useState("");

  useEffect(() => {
    if (isEditMode && initialData) {
      setNome(initialData.nome);
    }
  }, [isEditMode, initialData]);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    try {
      if (isEditMode) {
        await updateCategory(Number(id), { nome });
      } else {
        await addCategory({ nome });
      }
      navigate("/categories");
    } catch (error) {
      console.error("Falha ao salvar categoria:", error);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Input
        legend="Nome da Categoria *"
        placeholder="Ex: Analgésicos"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        disabled={isLoading}
      />
      <div className="flex justify-center items-center gap-3 pt-4">
        <Button
          type="button"
          variant="outline"
          onClick={() => navigate("/categories")}
          disabled={isLoading}
        >
          Cancelar
        </Button>
        <Button type="submit" isLoading={isLoading}>
          {isEditMode ? "Salvar Alterações" : "Cadastrar"}
        </Button>
      </div>
    </form>
  );
}
