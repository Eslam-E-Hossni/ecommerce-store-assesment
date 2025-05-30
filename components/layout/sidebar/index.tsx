"use client";
import Image from "next/image";
import LinkItem from "./LinkItem";
import { LINKS } from "./constants";
import { useEffect, useState } from "react";
import cls from "classnames";
import Link from "next/link";
import { Button } from "@/components/ui";

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
        "sidebar fixed h-full bg-gray-25 transition-all border-r border-r-gray-200 z-50",
        isSidebarActive ? "w-[240px]" : "w-[60px] lg:w-[80px]"
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
              isSidebarActive ? "gap-x-3 px-8" : "px-3 lg:px-4"
            )}
          >
            {isSidebarActive && (
              <Image
                src={"/images/logo-base.svg"}
                width={40}
                height={40}
                alt="logo from super.exampl"
              />
            )}
            {!isSidebarActive && (
              <Image
                src={"/images/logo-base.svg"}
                width={30}
                height={30}
                alt="logo from super.exampl"
              />
            )}
            <p
              className={cls(
                "font-heading-font text-2xl font-medium text-gray-600",
                isSidebarActive ? "" : "absolute opacity-0"
              )}
            >
              Super
            </p>
          </Link>
          <nav>
            <ul>
              {LINKS?.main.map((link: ILink) => (
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
            {LINKS?.footer.map((link: ILink) => (
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

      <Button
        className="hidden md:block absolute -right-[14px] lg:-right-[11px] top-5 lg:top-8"
        icon="chevron"
        size="sm"
        theme="primary"
        iconDirection={isSidebarActive ? "left" : "right"}
        handler={handleSidebarToggle}
      />
      <Button
        className="block md:hidden absolute -right-[14px] lg:-right-[11px] top-5 lg:top-8"
        icon="chevron"
        size="xs"
        theme="primary"
        iconDirection={isSidebarActive ? "left" : "right"}
        handler={handleSidebarToggle}
      />
    </aside>
  );
};

export default Sidebar;
