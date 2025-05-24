import { ReactNode, useEffect, useReducer } from "react";
import { CartActionTypes, CartContextType, CartItem } from "../types";
import { CartReducer, CartContext, initialState } from "./";

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(CartReducer, initialState);

  // get the cart from localstorage when start
  useEffect(() => {
    const loadCartFromLocalStorage = () => {
      try {
        const savedCart = localStorage.getItem("cart");
        if (savedCart) {
          const parsedCart = JSON.parse(savedCart);
          dispatch({
            type: CartActionTypes.LOAD_CART,
            payload: parsedCart.items,
          });
        }
      } catch (error) {
        console.error("Failed to get data from localStorage", error);
        localStorage.removeItem("cart");
      }
    };

    // use setTimeout to avoid Next Hydration errors
    if (typeof window !== "undefined") {
      setTimeout(loadCartFromLocalStorage, 0);
    }
  }, []);

  const addToCart = (item: Omit<CartItem, "quantity">) => {
    dispatch({
      type: CartActionTypes.ADD_TO_CART,
      payload: item as CartItem,
    });
  };

  const removeFromCart = (id: string | number) => {
    dispatch({
      type: CartActionTypes.REMOVE_FROM_CART,
      payload: { id },
    });
  };

  const clearCart = () => {
    dispatch({ type: CartActionTypes.CLEAR_CART });
  };

  const contextValue: CartContextType = {
    state,
    addToCart,
    removeFromCart,
    clearCart,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};
