import { useContext } from "react";
import { FilterContext } from "../context/FilterContext";

export const useFilter = () => {
  const context = useContext(FilterContext);

  if (context === undefined) {
    throw new Error("Should use useFilter inside FilterProvider");
  }

  return context;
};

export const useFilterState = () => {
  const { state } = useFilter();
  return state;
};

export const useFilterActions = () => {
  const { setSearchTerm, setCategory, setProducts } =
    useFilter();

  return {
    setSearchTerm,
    setCategory,
    setProducts,
  };
};
