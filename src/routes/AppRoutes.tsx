import { Route, Routes } from "react-router";

import { NewProduct } from "../components/NewProduct";
import { NotFound } from "../components/NotFound";
import { AppLayout } from "../components/AppLayout";

import { Home } from "../pages/Home";
import { Products } from "../pages/Products";
import { Categories } from "../pages/Categories";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/newProduct" element={<NewProduct />} />
        <Route path="/editProduct/:id" element={<NewProduct />} />
        <Route path="/categories" element={<Categories />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
