"use client";
import { ReactNode } from "react";
import { CartProvider } from "@/features/cart/context/CartProvider";

export default function Provider({ children }: { children: ReactNode }) {
  return <CartProvider>{children}</CartProvider>;
}
