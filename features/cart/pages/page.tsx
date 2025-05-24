import { Icon } from "@/components/ui";
import Link from "next/link";
import { CartDetails } from "../components";

const CartPage = async () => {
  return (
    <div id="cart-page">
      <div>
        <div className="">
          <Link href="/" className="flex w-fit items-center gap-x-1">
            <Icon name="back" size={26} />
            <span className="inline-block font-heading-font">Back</span>
          </Link>
        </div>
        <h1 className="text-lg md:text-xl xl:text-3xl font-bold">
          My Shopping Cart
        </h1>
      </div>

      <CartDetails />
    </div>
  );
};

export default CartPage;
