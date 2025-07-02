import { Loader } from "lucide-react";
import { useProduct } from "../hooks/useProducts";
import { EmptyList } from "./EmptyList";
import { Category } from "./Category";

export function CategoryList() {
  const { categories, isLoading } = useProduct();

  return (
    <>
      {isLoading ? (
        <div className="w-full h-screen flex justify-center items-center">
          <Loader size={30} className="animate-spin" />
        </div>
      ) : categories.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Category key={category.id} data={category} />
          ))}
        </div>
      ) : (
        <EmptyList
          title="Nenhuma categoria encontrada"
          description="Comece criando sua primeira categoria de produtos"
          titleButton="Criar Primeira Categoria"
        />
      )}
    </>
  );
}
