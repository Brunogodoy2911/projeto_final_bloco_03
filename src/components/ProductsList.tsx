import { Loader } from "lucide-react";
import { useProduct } from "../hooks/usePrtoducts";
import { Product } from "./Product";
import { EmptyList } from "./EmptyList";

export function ProductsList() {
  const { products, isLoading } = useProduct();

  return (
    <>
      {isLoading ? (
        <div className="w-full h-screen flex justify-center items-center">
          <Loader size={30} className="animate-spin" />
        </div>
      ) : products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <Product key={product.id} data={product} />
          ))}
        </div>
      ) : (
        <EmptyList />
      )}
    </>
  );
}
