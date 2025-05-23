"use client";
import Link from "next/link";
import { isActiveRoute } from "../../../utils/routeMatch";
import cls from "classnames";
import { usePathname } from "next/navigation";
import { ILink } from ".";
import Icon from "../../ui/icon";
import { useState } from "react";

interface LinkItemProps extends ILink {
  isSidebarActive: boolean;
}

const LinkItem = (props: LinkItemProps) => {
  const { icon, label, link, isSidebarActive } = props;
  const [isHoverd, setIsHoverd] = useState(false);
  const pathname = usePathname();
  return (
    <li className="mb-2">
      <Link
        href={link}
        onMouseEnter={() => setIsHoverd(true)}
        onMouseLeave={() => setIsHoverd(false)}
        className={cls(
          "flex items-center gap-x-4 py-3 relative transition-all hover:bg-gray-200 hover:rounded-r-full group",
          isActiveRoute(pathname, link) && "bg-gray-200 rounded-r-full",
          isSidebarActive ? "px-8" : "px-7"
        )}
      >
        <i
          className={cls(
            "block absolute left-0 top-0 h-full link-shape transition-transform group-hover:translate-x-0",
            isActiveRoute(pathname, link)
              ? "translate-x-0"
              : "-translate-x-full"
          )}
        />
        <Icon name={icon as "home"} color={isActiveRoute(pathname, link) ? "primary" :"gray"} hoverColor="primary" isHoverd={isHoverd} />
        <p
          className={cls(
            "font-heading-font",
            isActiveRoute(pathname, link) ? "text-gray-800" : "text-gray-600",
            !isSidebarActive && "absolute opacity-0"
          )}
        >
          {label}
        </p>
      </Link>
    </li>
  );
};

export default LinkItem;
