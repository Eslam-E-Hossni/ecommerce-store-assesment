

export interface Product {
  id: string | number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface Category {
  id: string | number;
  name: string;
}

export interface FilterState {
  searchTerm: string;
  selectedCategory: string | number | null;
  products: Product[];
  filteredProducts: Product[];
}

export enum FilterActionTypes {
  SET_SEARCH_TERM = "SET_SEARCH_TERM",
  SET_CATEGORY = "SET_CATEGORY",
  SET_PRODUCTS = "SET_PRODUCTS",
  RESET_FILTERS = "RESET_FILTERS",
}

export interface SetSearchTermAction {
  type: FilterActionTypes.SET_SEARCH_TERM;
  payload: string;
}

export interface SetCategoryAction {
  type: FilterActionTypes.SET_CATEGORY;
  payload: string | number | null;
}

export interface SetProductsAction {
  type: FilterActionTypes.SET_PRODUCTS;
  payload: Product[];
}

export type FilterAction =
  | SetSearchTermAction
  | SetCategoryAction
  | SetProductsAction;

export interface FilterContextType {
  state: FilterState;
  setSearchTerm: (term: string) => void;
  setCategory: (categoryId: string | number | null) => void;
  setProducts: (products: Product[]) => void;
}
