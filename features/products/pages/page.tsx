import { notFound } from "next/navigation";
import ProductsFilter from "../components/products-filter";
import Products from "../components/products";
import { getAllProducts } from "../services/products";

const ProductsPage = async () => {
  const products = await getAllProducts();

  const uniqueCategories = Array.from(
    new Set(products?.map((product) => product.category))
  ).map((category) => ({
    name: category,
    id: category,
  }));

  if (!products) {
    notFound();
  }

  return (
    <div id="products-page">
      <h1 className="text-lg md:text-xl xl:text-3xl font-bold">
        Best Selling Products
      </h1>

      <ProductsFilter categories={uniqueCategories} />
      <Products products={products} />
    </div>
  );
};

export default ProductsPage;
