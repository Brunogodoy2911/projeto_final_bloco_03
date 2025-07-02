import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { ArrowLeft, Edit, Loader, Tag } from "lucide-react";
import { api } from "../services/api";
import { CategoryForm } from "./CategoryForm";
import type { Categoria } from "../models/categoria";

export function NewCategory() {
  const navigate = useNavigate();
  const { id } = useParams();

  const isEditMode = !!id;

  const [initialData, setInitialData] = useState<Categoria | null>(null);
  const [isLoading, setIsLoading] = useState(isEditMode);

  useEffect(() => {
    if (isEditMode) {
      setIsLoading(true);
      api
        .get(`/categorias/${id}`)
        .then((response) => {
          setInitialData(response.data);
        })
        .catch((error) => {
          console.error("Erro ao buscar dados da categoria:", error);
          alert("Não foi possível carregar a categoria para edição.");
          navigate("/categories");
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [id, isEditMode, navigate]);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
          onClick={() => navigate("/categories")}
        >
          <ArrowLeft size={20} />
          <span>Voltar para categorias</span>
        </button>

        <div className="flex items-center gap-3 mt-4 mb-6">
          {isEditMode ? (
            <Edit size={32} className="text-green-600" />
          ) : (
            <Tag size={32} className="text-green-600" />
          )}
          <h1 className="text-3xl font-bold text-gray-900">
            {isEditMode ? "Editar Categoria" : "Nova Categoria"}
          </h1>
        </div>

        {isLoading ? (
          <div className="w-full flex justify-center items-center py-10">
            <Loader size={30} className="animate-spin text-gray-400" />
          </div>
        ) : (
          <div className="bg-white p-8 rounded-xl shadow-md">
            <CategoryForm isEditMode={isEditMode} initialData={initialData} />
          </div>
        )}
      </div>
    </div>
  );
}
