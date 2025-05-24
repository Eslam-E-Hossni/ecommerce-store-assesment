import { FilterState, Product } from "../types";

export const filterProducts = (
  state: Omit<FilterState, "filteredProducts">
): Product[] => {
  let result = state.products;

  if (state.searchTerm) {
    const searchTermLower = state.searchTerm.toLowerCase();
    result = result.filter(
      (product) =>
        product.title.toLowerCase().includes(searchTermLower) ||
        product.description.toLowerCase().includes(searchTermLower)
    );
  }

  if (state.selectedCategory !== null) {
    result = result.filter(
      (product) => product.category === state.selectedCategory
    );
  }

  return result;
};
