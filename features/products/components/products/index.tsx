"use client";
import {ProductCard} from "../";
import { Product } from "../../types";
import { useEffect } from "react";
import { useFilterActions, useFilterState } from "../../hooks/useFilter";

export const Products = ({ products }: { products: Product[] }) => {
  const { filteredProducts } = useFilterState();
  const { setProducts } = useFilterActions();

  useEffect(() => {
    setProducts(products);
  }, [products]);
  return (
    <section id="products">
      <p className="mb-3 font-heading-font capitalize text-black_04">
        {filteredProducts.length} products found
      </p>
      {filteredProducts?.length === 0 ? (
        <p className="font-heading-font capitalize text-black_04">
          no products found
        </p>
      ) : (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(100%,1fr))] md:grid-cols-[repeat(auto-fill,minmax(356px,1fr))] gap-x-10 gap-y-7">
          {filteredProducts.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Products;
