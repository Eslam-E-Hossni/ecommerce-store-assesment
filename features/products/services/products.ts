import axios from "@/lib/axios";
import type { IProduct } from "../types/product";

export const getAllProducts = async (): Promise<IProduct[]> => {
  const response = await axios.get("/products");
  return response.data;
};

export const getProductById = async (id: number): Promise<IProduct> => {
  const response = await axios.get(`/products/${id}`);
  return response.data;
};
