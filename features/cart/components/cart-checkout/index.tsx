import Button from "@/components/ui/button";
import { useCartActions, useCartState } from "../../hooks/useCart";

const CartCheckout = () => {
  const { totalPrice } = useCartState();
  const { clearCart } = useCartActions();

  const handleCheckout = () => {
    alert("Checkout...");
    clearCart();
  };
  return (
    <div className="w-full lg:w-[380px] py-4 px-6 bg-white lg:bg-white_01/10 border border-gray-300 rounded-xl sticky bottom-0 lg:top-20">
      <p className="flex items-center justify-between mb-4">
        <span className="text-gray-600 text-base md:text-lg lg:text-xl font-medium font-heading-font">
          Total
        </span>
        <span className="text-black_04 text-base md:text-lg lg:text-xl font-medium font-heading-font">
          ${Number(totalPrice).toFixed(2)}
        </span>
      </p>
      <Button
        theme="secondary"
        className="w-full uppercase text-sm md:text-lg rounded-md"
        handler={handleCheckout}
      >
        CHECKOUT NOW
      </Button>
    </div>
  );
};

export default CartCheckout;
