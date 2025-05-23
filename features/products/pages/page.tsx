import { notFound } from "next/navigation";
import ProductsFilter from "../components/filter";
import Products from "../components/products";
import { getAllProducts } from "../services/products";

const ProductsPage = async () => {
  const products = await getAllProducts();

  if (!products) {
    notFound();
  }

  return (
    <div id="products-page">
      <h1 className="text-lg md:text-xl font-bold">
        Best Selling Electronics Products - Weekly Update.
      </h1>

      <ProductsFilter />
      <Products products={products} />
    </div>
  );
};

export default ProductsPage;
