"use client";
import Button from "@/components/ui/button";
import { useFilterActions, useFilterState } from "../../hooks/useFilter";
import { Category } from "../../types";

interface CategoryFilterProps {
  categories: Category[];
}

const ProductsFilter = ({ categories }: CategoryFilterProps) => {
  const { selectedCategory } = useFilterState();
  const { setCategory } = useFilterActions();
  return (
    <section id="filter" className="my-7">
      <div className="flex items-center gap-x-3 md:gap-x-4 overflow-x-scroll hide-scroll-bar">
        <Button
          theme={selectedCategory === null ? "filterPill" : "ghostPill"}
          handler={() => setCategory(null)}
        >
          All
        </Button>
        {categories?.map((category) => (
          <Button
            theme={
              selectedCategory === category.id ? "filterPill" : "ghostPill"
            }
            key={category.id}
            className="capitalize"
            handler={() => setCategory(category.id)}
          >
            {category.name}
          </Button>
        ))}
      </div>
    </section>
  );
};

export default ProductsFilter;
