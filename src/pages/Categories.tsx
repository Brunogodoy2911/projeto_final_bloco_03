import { Plus, Tag } from "lucide-react";
import { Button } from "../components/Button";
import { useNavigate } from "react-router";
import { CategoryList } from "../components/CategoryList";

export function Categories() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex flex-col gap-3">
            <span className="flex items-center gap-3">
              <Tag size={32} className="text-green-600" />
              <h1 className="text-3xl font-bold text-gray-900">Categorias</h1>
            </span>

            <p className="text-gray-600">
              Gerencie todas as categorias de produtos da farmácia
            </p>
          </div>

          <Button className="gap-3" onClick={() => navigate("/newCategory")}>
            <Plus size={20} />
            Nova Categoria
          </Button>
        </div>

        <CategoryList />
      </div>
    </div>
  );
}
