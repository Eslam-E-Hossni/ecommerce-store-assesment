"use client";
import { ReactNode } from "react";
import { CartProvider } from "@/features/cart/context/CartProvider";
import { FilterProvider } from "@/features/products/context/FilterProvider";

export default function Provider({ children }: { children: ReactNode }) {
  return (
    <FilterProvider>
      <CartProvider>{children}</CartProvider>
    </FilterProvider>
  );
}
