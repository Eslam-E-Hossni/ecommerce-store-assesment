export interface CartItem {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  quantity: number;
}

export interface CartState {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
}

export enum CartActionTypes {
  ADD_TO_CART = "ADD_TO_CART",
  REMOVE_FROM_CART = "REMOVE_FROM_CART",
  LOAD_CART = "LOAD_CART",
}

export interface AddToCartAction {
  type: CartActionTypes.ADD_TO_CART;
  payload: CartItem;
}

export interface RemoveFromCartAction {
  type: CartActionTypes.REMOVE_FROM_CART;
  payload: {
    id: string | number;
  };
}

export interface LoadCartAction {
  type: CartActionTypes.LOAD_CART;
  payload: CartItem[];
}

export type CartAction =
  | AddToCartAction
  | RemoveFromCartAction
  | LoadCartAction;

export interface CartContextType {
  state: CartState;
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  removeFromCart: (id: string | number) => void;
}
