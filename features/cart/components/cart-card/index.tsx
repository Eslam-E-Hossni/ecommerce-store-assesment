import Button from "@/components/ui/button";
import Image from "next/image";
import { Product } from "@/features/products/types";
import { useCartActions } from "../../hooks/useCart";
import Link from "next/link";

const CartCard = ({ item }: { item: Product }) => {
  const { removeFromCart } = useCartActions();
  return (
    <div className="flex items-center py-4 px-4 md:px-8 lg:px-12 bg-white border border-gray-300 rounded-xl mb-6 last:mb-0">
      <div className="flex-1 gap-x-14 flex flex-col items-center lg:flex-row lg:justify-between lg:items-center">
        <div className="w-full h-[200px] lg:w-[80px] lg:h-[80px] bg-white_01/10 relative mb-2 lg:mb-0">
          <Image
            src={item?.image}
            fill
            className="object-contain"
            alt="product"
            style={{ mixBlendMode: "multiply" }}
          />
        </div>
        <div className="flex-1 mb-3 lg:mb-0 self-start lg:self-auto">
          <Link
            href={`products/${item?.id}`}
            className="text-sm md:text-lg font-heading-font font-semibold text-black_04 mb-1"
          >
            {item.title}
          </Link>
          <p className="text-sm md:text-base font-body-font text-gray-600">
            {item.category}
          </p>
        </div>
        <div className="mb-4 flex items-center gap-x-4 lg:block lg:mb-0 self-start lg:self-auto">
          <p className="font-heading-font text-gray-600 text-base md:text-lg">
            Price
          </p>
          <p className="font-body-font text-black_04 font-semibold ">
            ${Number(item.price).toFixed(2)}
          </p>
        </div>
        <Button
          className="self-start w-full lg:self-auto lg:w-auto"
          theme="secondary"
          handler={() => removeFromCart(item?.id)}
        >
          Remove
        </Button>
      </div>
    </div>
  );
};

export default CartCard;
