import { ProductProvider } from "./contexts/ProductsContext";
import { Routes } from "./routes";

export function App() {
  return (
    <ProductProvider>
      <Routes />
    </ProductProvider>
  );
}
