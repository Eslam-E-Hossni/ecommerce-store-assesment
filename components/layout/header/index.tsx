"use client";
import Button from "@/components/ui/button";
import { useCartState } from "@/features/cart/hooks/useCart";
import Image from "next/image";
import Search from "./search";

const Header = () => {
  const { totalItems } = useCartState();

  return (
    <header
      id="header"
      className="fixed top-0 bg-white/70 backdrop-blur-md rounded-b-3xl h-[70px] flex items-center left-[60px] lg:left-[calc(240px+28px)] right-0 lg:right-[28px] transition-all z-40"
    >
      <div className="px-6 w-full">
        <div className="flex items-center justify-between">
          <Search />
          <div className="flex items-center gap-x-6">
            <div className="relative">
              <Button
                icon="cart"
                size="lg"
                iconColor="gray"
                theme="ghost"
                href="/cart"
              />

              {totalItems > 0 && (
                <span className="absolute w-[20px] h-[20px] bottom-0 left-5 rounded-full bg-primary-500 text-gray-900 font-bold flex items-center justify-center text-xs select-none">
                  {totalItems}
                </span>
              )}
            </div>
            <div className="hidden lg:block avatar relative w-[50px] h-[50px] rounded-full border-[2px] border-dashed border-primary-500 overflow-hidden">
              <Image
                src="/images/avatar.jpg"
                fill
                alt="avatar from super.example"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
