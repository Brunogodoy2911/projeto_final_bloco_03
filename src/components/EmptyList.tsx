import { Package, Plus } from "lucide-react";
import { Button } from "./Button";
import { useNavigate } from "react-router";

export function EmptyList() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center mt-30">
      <Package size={52} className="text-gray-300 mx-auto mb-4" />
      <h1 className="text-2xl font-medium text-gray-900 mb-2">
        Nenhum produto encontrado
      </h1>
      <p className="text-gray-600 mb-8">
        Comece adicionando seu primeiro produto
      </p>

      <Button className="gap-2" onClick={() => navigate("newProduct")}>
        <Plus />
        Adicionar Primeiro Produto
      </Button>
    </div>
  );
}
