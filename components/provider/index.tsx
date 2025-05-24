"use client";
import { ReactNode } from "react";
import { CartProvider } from "@/features/cart/context";
import { FilterProvider } from "@/features/products/context";

export default function Provider({ children }: { children: ReactNode }) {
  return (
    <FilterProvider>
      <CartProvider>{children}</CartProvider>
    </FilterProvider>
  );
}
