"use client";
import Image from "next/image";
import LinkItem from "./LinkItem";
import { menue } from "./menu";
import { useEffect, useState } from "react";
import cls from "classnames";
import Link from "next/link";
import Icon from "@/components/ui/icon";

export interface ILink {
  label: string;
  icon: string;
  link: string;
}

export const Sidebar = () => {
  const [isSidebarActive, setIsSidebarActive] = useState(true);

  const handleSidebarToggle = () => {
    setIsSidebarActive((prev) => !prev);
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    document.body.classList.toggle("sidebar-collapsed", !isSidebarActive);

    return () => {
      document.body.classList.remove("sidebar-collapsed");
    };
  }, [isSidebarActive]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(max-width: 1024px)");

    const handleResize = (e: MediaQueryListEvent | MediaQueryList) => {
      setIsSidebarActive(!e.matches ? true : false);
    };

    handleResize(mediaQuery);

    mediaQuery.addEventListener("change", handleResize);
    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);
  return (
    <aside
      className={cls(
        "sidebar fixed h-full bg-gray-25 transition-all border-r border-r-gray-200",
        isSidebarActive ? "w-[240px]" : "w-[80px]"
      )}
      id="sidebar"
    >
      <div className="py-6 flex flex-col justify-between h-full overflow-hidden">
        <div>
          <Link
            href={"/"}
            id="logo"
            className={cls(
              "flex items-center relative mb-11",
              isSidebarActive ? "gap-x-3 px-8" : "px-4"
            )}
          >
            <Image
              src={"/images/logo-base.svg"}
              width={40}
              height={40}
              alt="logo from super.com"
            />
            <p
              className={cls(
                "font-heading-font font-medium text-gray-600",
                isSidebarActive ? "text-2xl" : "absolute opacity-0"
              )}
            >
              Super
            </p>
          </Link>
          <nav>
            <ul>
              {menue?.main.map((link: ILink) => (
                <LinkItem
                  key={link.label}
                  {...link}
                  isSidebarActive={isSidebarActive}
                />
              ))}
            </ul>
          </nav>
        </div>
        <div>
          <ul>
            {menue?.footer.map((link: ILink) => (
              <LinkItem
                key={link.label}
                {...link}
                isSidebarActive={isSidebarActive}
              />
            ))}
          </ul>
          {isSidebarActive && (
            <p className="text-sm text-gray-500 text-center pt-6 border-t border-gray-300">
              Copyright 2025 By Islam Emad
            </p>
          )}
        </div>
      </div>

      <button
        className="absolute -right-[11px] top-8 w-[25px] h-[25px] rounded-full bg-primary-500 flex items-center justify-center"
        onClick={handleSidebarToggle}
      >
        <Icon
          name="chevron"
          size={16}
          color="white"
          direction={isSidebarActive ? "left" : "right"}
          animated
        />
      </button>
    </aside>
  );
};

export default Sidebar;
