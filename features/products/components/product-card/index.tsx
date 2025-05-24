"use client";
import Button from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import Image from "next/image";
import Link from "next/link";
import { Product } from "../../types";
import { useState } from "react";
import { useCartActions, useIsInCart } from "@/features/cart/hooks/useCart";

const ProductCard = ({ product }: { product: Product }) => {
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
    <div className="group">
      <div>
        <div className="w-full h-[250px] flex justify-center items-center bg-white_01/10 rounded-xl overflow-hidden">
          <div className="w-[300px] h-[220px] relative">
            <Image
              src={product.image}
              fill
              className="object-contain"
              alt="product"
              style={{ mixBlendMode: "multiply" }}
            />
          </div>
        </div>
      </div>

      <div className="mt-4">
        <div className="flex gap-x-4">
          <div className="w-8 h-8 bg-yellow-100 rounded-full relative overflow-hidden">
            <Image
              src="/images/avatar.jpg"
              className="z-10"
              fill
              alt="author pic from super.example"
            />
          </div>
          <div className="w-full">
            <Link
              href={`/products/${product?.id}`}
              className="font-heading-font font-semibold text-gray-800 transition-colors group-hover:text-primary-500"
            >
              {product?.title}
            </Link>
            <p className="text-gray-600 font-body-font mt-1">Islam Emad</p>
            <div className="flex justify-between items-center mt-3">
              <div>
                <p className="text-primary-500 font-semibold font-heading-font mb-2">
                  ${Number(product?.price).toFixed(2)}
                </p>
                <p className="flex items-center gap-x-2">
                  <Icon name="star" color="primary" size={18} />
                  <span className="text-sm text-gray-600">
                    {product.rating.rate} ({product.rating.count})
                  </span>
                </p>
              </div>
              <Button
                icon="cart-plus"
                theme={productInCart ? "primary" : "gray"}
                handler={handleAddToCart}
                disabled={isAdding}
                isLoading={isAdding}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
