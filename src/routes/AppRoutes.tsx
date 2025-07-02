import React from "react";
import { Route, Routes } from "react-router";
import { AppLayout } from "../components/AppLayout";
import { Home } from "../pages/Home";
import { NotFound } from "../components/NotFound";
import { Products } from "../pages/Products";
import { Categories } from "../pages/Categories";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/categories" element={<Categories />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
