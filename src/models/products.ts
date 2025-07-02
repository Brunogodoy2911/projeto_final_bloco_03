import type { Categoria } from "./categoria";

export type Product = {
  id: number;
  nome: string;
  preco: number;
  foto: string;
  categoria: Categoria;
};
