import { FilterAction, FilterActionTypes, FilterState } from "../types";
import { filterProducts } from "../utils/productFilters";

export const FilterReducer = (
  state: FilterState,
  action: FilterAction
): FilterState => {
  switch (action.type) {
    case FilterActionTypes.SET_SEARCH_TERM: {
      const filteredProducts = filterProducts({
        ...state,
        searchTerm: action.payload,
      });

      return {
        ...state,
        searchTerm: action.payload,
        filteredProducts,
      };
    }

    case FilterActionTypes.SET_CATEGORY: {
      const filteredProducts = filterProducts({
        ...state,
        selectedCategory: action.payload,
      });

      return {
        ...state,
        selectedCategory: action.payload,
        filteredProducts,
      };
    }

    case FilterActionTypes.SET_PRODUCTS: {
      const filteredProducts = filterProducts({
        ...state,
        products: action.payload,
      });

      return {
        ...state,
        products: action.payload,
        filteredProducts,
      };
    }

    default:
      return state;
  }
};
