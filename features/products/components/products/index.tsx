import React from "react";
import ProductCard from "../product-card";
import { IProduct } from "../../types/product";

const Products = ({ products }: { products: IProduct[] }) => {
  return (
    <section id="products">
      <div className="grid grid-cols-[repeat(auto-fill,minmax(100%,1fr))] md:grid-cols-[repeat(auto-fill,minmax(356px,1fr))] gap-x-10 gap-y-7">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </section>
  );
};

export default Products;
