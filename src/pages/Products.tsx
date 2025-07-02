import { Package, Plus } from "lucide-react";
import { Button } from "../components/Button";
import { ProductsList } from "../components/ProductsList";
import { useNavigate } from "react-router";

export function Products() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Package size={32} className="text-green-600" />
            <h1 className="text-3xl font-bold text-gray-900">Produtos</h1>
          </div>

          <Button className="gap-3" onClick={() => navigate("/newProduct")}>
            <Plus size={20} />
            Novo Produto
          </Button>
        </div>

        <ProductsList />
      </div>
    </div>
  );
}
