import { use } from "react";
import { ProductContext } from "../contexts/ProductsContext";

export function useProduct() {
  const context = use(ProductContext);

  return context;
}
