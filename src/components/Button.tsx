import type { ComponentProps } from "react";
import { classMerge } from "../utils/classMerge";
import { Loader } from "lucide-react";

type Props = ComponentProps<"button"> & {
  isLoading?: boolean;
  variant?: "base" | "icon" | "outline";
};

const variants = {
  button: {
    base: "px-8 py-4",
    icon: "px-0 py-0 rounded-full",
    outline:
      "px-12 py-4 bg-transparent hover:bg-gray-100 border border-gray-300 text-gray-700",
  },
};

export function Button({
  children,
  isLoading,
  className,
  type = "button",
  variant = "base",
  ...rest
}: Props) {
  return (
    <button
      type={type}
      disabled={isLoading}
      className={classMerge([
        "flex items-center justify-center rounded-lg bg-green-600 hover:bg-green-700 transition-colors ease-linear disabled:opacity-50 text-white font-semibold hover:cursor-pointer",
        variants.button[variant],
        isLoading && "cursor-progress",
        className,
      ])}
      {...rest}
    >
      {isLoading ? <Loader size={30} className="animate-spin" /> : children}
    </button>
  );
}
