import { ArrowLeft, Package } from "lucide-react";
import { useNavigate } from "react-router";
import { Form } from "./Form";

export function NewProduct() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="flex items-center gap-2 hover:cursor-pointer"
          onClick={() => navigate("/products")}
        >
          <ArrowLeft className="text-gray-600" size={20} />
          <p className="text-gray-600">Voltar para produtos</p>
        </div>

        <div className="flex items-center gap-3 mt-4 mb-6">
          <Package size={32} className="text-green-600" />
          <h1 className="text-3xl font-bold text-gray-900">Novo Produto</h1>
        </div>

        <Form />
      </div>
    </div>
  );
}
