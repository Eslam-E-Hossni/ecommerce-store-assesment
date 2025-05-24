import { PageProps } from "@/types";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getProductById } from "../../services";
import { ProductDetails } from "../../components";
import { Icon } from "@/components/ui";

const ProductDetailsPage = async ({ params }: PageProps<{ id: string }>) => {
  const { id } = params;

  // Check if id is not a number
  if (!/^\d+$/.test(id)) {
    notFound();
  }

  const product = await getProductById(+id);

  if (!product) {
    notFound();
  }

  return (
    <div id="products-details">
      <div>
        <Link href="/" className="flex w-fit items-center gap-x-1">
          <Icon name="back" size={26} />
          <span className="inline-block font-heading-font">Back</span>
        </Link>
      </div>

      <ProductDetails product={product} />
    </div>
  );
};

export default ProductDetailsPage;
