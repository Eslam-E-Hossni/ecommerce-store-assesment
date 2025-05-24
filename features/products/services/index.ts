import axios from "@/lib/axios";
import type { Product } from "../types";

export const getAllProducts = async (): Promise<Product[] | null> => {
  const response = await axios.get("/products");
  if (response.status !== 200) return null;
  return response.data;
};

export const getProductById = async (id: number): Promise<Product | null> => {
  const response = await axios.get(`/products/${id}`);
  if (response.status !== 200) return null;
  return response.data;
};
