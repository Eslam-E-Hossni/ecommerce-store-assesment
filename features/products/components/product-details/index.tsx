"use client";
import Image from "next/image";
import { Badge, Button, Icon } from "@/components/ui";
import { useCartActions, useIsInCart } from "@/features/cart/hooks/useCart";
import { useState } from "react";
import { Product } from "../../types";

export const ProductDetails = ({ product }: { product: Product }) => {
  const { addToCart, removeFromCart } = useCartActions();
  const isInCart = useIsInCart();
  const [isAdding, setIsAdding] = useState(false);

  const productInCart = isInCart(product.id);

  const handleAddToCart = () => {
    setIsAdding(true);

    if (productInCart) {
      removeFromCart(product.id);
    } else {
      addToCart({
        id: product.id as number,
        title: product.title,
        price: product.price,
        description: product.description,
        rating: product.rating,
        image: product.image,
        category: product.category,
      });
    }

    setTimeout(() => {
      setIsAdding(false);
    }, 500);
  };
  return (
    <div className="flex flex-col lg:flex-row gap-x-10 py-4">
      <div className="w-full h-[400px] lg:h-[70dvh] lg:w-[604px] bg-white_01/10 relative mb-3 lg:mb-0">
        <Image
          src={product?.image}
          className="object-contain"
          fill
          alt="product image from super.example"
          style={{ mixBlendMode: "multiply" }}
        />
      </div>
      <div className="flex-1 flex flex-col justify-center">
        <div className="mb-8">
          <div className="mb-4">
            <Badge label={product.category} />
          </div>
          <h3 className="text-2xl lg:text-[30px] font-heading-font font-semibold text-black_03 mb-2">
            {product.title}
          </h3>
          <p className="flex items-center gap-x-2 mb-6">
            <Icon
              name="star"
              color="primary"
              className="hidden lg:block"
              size={24}
            />
            <Icon
              name="star"
              color="primary"
              className="block lg:hidden"
              size={20}
            />
            <span className="text-black_05 text-base lg:text-lg font-heading-font">
              {product.rating.rate} ({product.rating.count})
            </span>
          </p>
          <p className="text-3xl lg:text-4xl text-primary-500 font-semibold font-heading-font mb-7">
            ${Number(product.price).toFixed(2)}
          </p>
          <div>
            <h4 className="lg:text-lg font-heading-font font-semibold text-black_05 mb-2">
              Description
            </h4>
            <p className="font-body-font text-sm lg:text-base text-gray-800 leading-6">
              {product.description}
            </p>
          </div>
        </div>
        <Button
          theme="primary"
          className="rounded-none text-xl flex items-center justify-center lg:w-[400px]"
          handler={handleAddToCart}
          disabled={isAdding}
          isLoading={isAdding}
        >
          {productInCart ? "Remove From Cart" : "Add To Cart"}
        </Button>
      </div>
    </div>
  );
};

export default ProductDetails;
