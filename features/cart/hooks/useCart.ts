"use client"
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export const useCart = () => {
  const context = useContext(CartContext);
  
  if (context === undefined) {
    throw new Error("Should use useCart inside CartProvider");
  }
  
  return context;
};


export const useCartState = () => {
  const { state } = useCart();
  return state;
};


export const useCartActions = () => {
  const { addToCart, removeFromCart } = useCart();
  
  return {
    addToCart,
    removeFromCart,
  };
};

export const useIsInCart = () => {
  const { state } = useCart();
  
  return (id: string | number) => {
    return state.items.some(item => item.id === id);
  };
};
