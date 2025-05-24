import { FilterState } from "../types";

export const initialState: FilterState = {
  searchTerm: "",
  selectedCategory: null,
  products: [],
  filteredProducts: [],
};
