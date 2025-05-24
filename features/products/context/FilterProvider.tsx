import { ReactNode, useReducer } from "react";
import { FilterReducer, initialState, FilterContext } from "./";
import { FilterActionTypes, FilterContextType, Product } from "../types";

export const FilterProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(FilterReducer, initialState);

  const setSearchTerm = (term: string) => {
    dispatch({
      type: FilterActionTypes.SET_SEARCH_TERM,
      payload: term,
    });
  };

  const setCategory = (categoryId: string | number | null) => {
    dispatch({
      type: FilterActionTypes.SET_CATEGORY,
      payload: categoryId,
    });
  };

  const setProducts = (products: Product[]) => {
    dispatch({
      type: FilterActionTypes.SET_PRODUCTS,
      payload: products,
    });
  };

  const contextValue: FilterContextType = {
    state,
    setSearchTerm,
    setCategory,
    setProducts,
  };

  return (
    <FilterContext.Provider value={contextValue}>
      {children}
    </FilterContext.Provider>
  );
};
