import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { ArrowLeft, Edit, Loader, Package } from "lucide-react";
import { Form } from "./Form";
import { api } from "../services/api";
import type { Product } from "../models/products";

export function NewProduct() {
  const navigate = useNavigate();
  const { id } = useParams();

  const isEditMode = !!id;

  const [initialData, setInitialData] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(isEditMode);

  useEffect(() => {
    if (isEditMode) {
      setIsLoading(true);
      api
        .get(`/produtos/${id}`)
        .then((response) => {
          setInitialData(response.data);
        })
        .catch((error) => {
          console.error("Erro ao buscar dados do produto:", error);
          alert("Não foi possível carregar o produto para edição.");
          navigate("/products");
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
          onClick={() => navigate("/products")}
        >
          <ArrowLeft size={20} />
          <span>Voltar para produtos</span>
        </button>

        <div className="flex items-center gap-3 mt-4 mb-6">
          {isEditMode ? (
            <Edit size={32} className="text-blue-600" />
          ) : (
            <Package size={32} className="text-green-600" />
          )}
          <h1 className="text-3xl font-bold text-gray-900">
            {isEditMode ? "Editar Produto" : "Novo Produto"}
          </h1>
        </div>

        {isLoading ? (
          <div className="w-full h-screen flex justify-center items-center">
            <Loader size={30} className="animate-spin" />
          </div>
        ) : (
          <Form isEditMode={isEditMode} initialData={initialData} />
        )}
      </div>
    </div>
  );
}
