import ProductsFilter from "../components/filter";
import Products from "../components/products";
import { getAllProducts } from "../services/products";

const ProductsPage = async () => {
  const products = await getAllProducts();
  console.log(products);
  
  return (
    <div id="products-page">
      <h1 className="text-xl font-bold">
        Best Selling Electronics Products - Weekly Update.
      </h1>

      <ProductsFilter />
      <Products products={products} />
    </div>
  );
};

export default ProductsPage;
