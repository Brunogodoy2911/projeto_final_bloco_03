import { type ComponentProps } from "react";
import { useNavigate } from "react-router";
import { Edit, Trash, Tag } from "lucide-react";

import type { Categoria } from "../models/categoria";
import { useProduct } from "../hooks/useProducts";
import { Button } from "./Button";

type CategoryCardProps = ComponentProps<"div"> & {
  data: Categoria;
};

export function Category({ data, ...rest }: CategoryCardProps) {
  const { deleteCategory, isLoading } = useProduct();
  const navigate = useNavigate();

  function handleDelete() {
    if (
      window.confirm(
        "Tem certeza que deseja deletar esta categoria? Isso pode afetar produtos existentes."
      )
    ) {
      deleteCategory(data.id);
    }
  }

  function handleEdit() {
    navigate(`/editProduct/${data.id}`);
  }

  return (
    <div
      className="bg-white p-4 border border-gray-200 rounded-xl flex justify-between items-center transition-shadow hover:shadow-md"
      {...rest}
    >
      <div className="flex items-center gap-4">
        <Tag className="text-green-500" />
        <h2 className="text-lg font-semibold text-gray-800">{data.nome}</h2>
      </div>

      <div className="flex items-center gap-3">
        <Button
          variant="outline"
          className="text-gray-900 p-2"
          onClick={handleEdit}
          disabled={isLoading}
          aria-label="Editar"
        >
          <Edit size={20} />
        </Button>
        <Button
          variant="icon"
          className="bg-red-500 hover:bg-red-700 p-2 rounded-lg"
          onClick={handleDelete}
          disabled={isLoading}
          aria-label="Deletar"
        >
          <Trash size={20} />
        </Button>
      </div>
    </div>
  );
}
