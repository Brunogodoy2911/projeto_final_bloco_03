import type { ComponentProps } from "react";
import { classMerge } from "../utils/classMerge";

type Props = ComponentProps<"button"> & {
  isLoading?: boolean;
  variant?: "base" | "icon";
};

const variants = {
  button: {
    base: "px-8 py-4",
    icon: "px-0 py-0 rounded-full",
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
      {children}
    </button>
  );
}
