"use client";
import Image from "next/image";
import { useCartState } from "../../hooks/useCart";
import CartCard from "../cart-card";
import CartCheckout from "../cart-checkout";

const CartDetails = () => {
  const { items } = useCartState();

  return items.length === 0 ? (
    <div className="h-[60dvh] flex items-center justify-center">
      <div>
        <Image
          src="/images/empty-cart.png"
          width={180}
          height={180}
          className="text-center mx-auto"
          alt="empty cart"
        />
        <h2 className="text-center text-lg md:text-xl xl:text-3xl font-bold mt-4">
          Your Cart Is Empty
        </h2>
      </div>
    </div>
  ) : (
    <div className="flex flex-col gap-y-10 lg:flex-row lg:gap-x-10 lg:items-start">
      <div className="flex-1">
        {items.map((item) => (
          <CartCard item={item} key={item.id} />
        ))}
      </div>
      <CartCheckout />
    </div>
  );
};

export default CartDetails;
