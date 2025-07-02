import { type ComponentProps } from "react";
import { classMerge } from "../utils/classMerge";

export type BadgeVariant = "Vitamina" | "Higiene" | "Medicamento";

type Props = ComponentProps<"div"> & {
  variant?: BadgeVariant;
  text: string;
};

const variants = {
  badge: {
    Vitamina: "bg-orange-100 text-orange-800",
    Higiene: "bg-blue-100 text-blue-800",
    Medicamento: "bg-red-100 text-red-800",
  },
};

export function Badge({
  className,
  text,
  variant = "Vitamina",
  ...rest
}: Props) {
  return (
    <div
      {...rest}
      className={classMerge([
        "inline-flex items-center border transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 text-xs px-2 py-1 rounded-full font-medium",
        variants.badge[variant],
        className,
      ])}
    >
      {text}
    </div>
  );
}
