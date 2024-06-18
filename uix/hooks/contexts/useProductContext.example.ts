import Product from "@/models/Product";
import { createContext, useContext } from "react";

export const ProductContext = createContext<Product>(new Product());

export default function useProductContext() {
  return useContext(ProductContext);
}
