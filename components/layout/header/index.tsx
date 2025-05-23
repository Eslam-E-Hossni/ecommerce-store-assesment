import Button from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import Image from "next/image";

const Header = () => {
  return (
    <header
      id="header"
      className="fixed top-0 bg-white/70 backdrop-blur-md rounded-b-3xl h-[70px] flex items-center left-[80px] lg:left-[calc(240px+28px)] right-0 lg:right-[28px] transition-all z-40"
    >
      <div className="px-6 w-full">
        <div className="flex items-center justify-between">
          <div>
            <form>
              <div className="lg:w-[280px] bg-gray-100 py-[10px] px-6 flex items-center gap-x-2 rounded-full">
                <Icon name="search" color="gray" size={16} />
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full bg-transparent outline-none text-black_02 placeholder-black_02 font-heading-font text-sm"
                />
              </div>
            </form>
          </div>
          <div className="flex items-center gap-x-6">
            <Button icon="cart" size="md" iconColor="gray" theme="ghost" />
            <Button theme="primary" size="md" className="hidden lg:block">
              Become a seller
            </Button>
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
