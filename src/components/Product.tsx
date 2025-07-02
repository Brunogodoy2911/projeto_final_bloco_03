import { type ComponentProps } from "react";
import type { Product } from "../models/products";
import { Badge, type BadgeVariant } from "./Badge";
import { Edit, Star, Trash } from "lucide-react";
import { formatCurrency } from "../utils/formatCurrency";
import { Button } from "./Button";

const placeholderImage =
  "https://ik.imagekit.io/brunogodoy/placeholder.jpg?updatedAt=1751288384316";

type Props = ComponentProps<"div"> & {
  data: Product;
};

function isBadgeVariant(value: string): value is BadgeVariant {
  return ["Vitamina", "Higiene", "Medicamento"].includes(value);
}

export function Product({ data, ...rest }: Props) {
  const imageSrc =
    data.foto && data.foto.startsWith("http") ? data.foto : placeholderImage;

  const variant = isBadgeVariant(data.categoria.nome)
    ? data.categoria.nome
    : undefined;

  return (
    <div
      className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow group py-2"
      {...rest}
    >
      <img
        src={imageSrc}
        alt={`Imagem do produto ${data.nome}`}
        className="w-full h-48 object-contain group-hover:scale-105 transition-transform duration-300"
      />

      <div className="p-4">
        <div className="flex items-center justify-between">
          <Badge text={data.categoria.nome} variant={variant} />

          <span className="flex justify-center items-center gap-2">
            <Star size={12} fill="yellow" className="text-yellow-600" />
            <p className="text-gray-600 text-md">4.9</p>
          </span>
        </div>

        <div className="mt-2">
          <h1 className="font-semibold text-gray-900 mb-2 line-clamp-2 text-xl">
            {data.nome}
          </h1>

          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-green-600">
              R${formatCurrency(data.preco)}
            </h1>

            <div className="flex justify-center items-center gap-2">
              <Button variant="outline" className="px-4">
                <Edit />
              </Button>
              <Button className="px-4 bg-red-500">
                <Trash />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
