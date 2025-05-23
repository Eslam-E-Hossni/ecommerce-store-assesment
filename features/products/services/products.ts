import axios from "@/lib/axios";
import type { IProduct } from "../types/product";

export const getAllProducts = async (): Promise<IProduct[] | null> => {
  const response = await axios.get("/products");
  if (response.status !== 200) return null;
  return response.data;
};

export const getProductById = async (id: number): Promise<IProduct | null> => {
  const response = await axios.get(`/products/${id}`);
  if (response.status !== 200) return null;
  return response.data;
};
