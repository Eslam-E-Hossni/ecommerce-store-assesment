import { CartAction, CartActionTypes, CartState } from "../types";
import { initialState } from "./initialState";

export const CartReducer = (
  state: CartState,
  action: CartAction
): CartState => {
  switch (action.type) {
    case CartActionTypes.ADD_TO_CART: {
      const newItem = action.payload;

      const itemWithQuantity = { ...newItem, quantity: 1 };
      const newState = {
        ...state,
        items: [...state.items, itemWithQuantity],
        totalItems: state.totalItems + 1,
        totalPrice: state.totalPrice + newItem.price,
      };

      // save new state in localStorage
      localStorage.setItem("cart", JSON.stringify(newState));
      return newState;
    }

    case CartActionTypes.REMOVE_FROM_CART: {
      const { id } = action.payload;
      const itemToRemove = state.items.find((item) => item.id === id);

      if (!itemToRemove) return state;

      const newState = {
        ...state,
        items: state.items.filter((item) => item.id !== id),
        totalItems: state.totalItems - itemToRemove.quantity,
        totalPrice:
          state.totalPrice - itemToRemove.price * itemToRemove.quantity,
      };

      // save new state in localStorage
      localStorage.setItem("cart", JSON.stringify(newState));
      return newState;
    }

    case CartActionTypes.LOAD_CART: {
      // load cart from localStorage
      return {
        items: action.payload,
        totalItems: action.payload.reduce(
          (total, item) => total + item.quantity,
          0
        ),
        totalPrice: action.payload.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        ),
      };
    }

    case CartActionTypes.CLEAR_CART: {
      localStorage.removeItem("cart");
      return initialState;
    }

    default:
      return state;
  }
};
