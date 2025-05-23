"use client";
import { IButton } from "@/types";
import cls from "classnames";
import Icon from "../icon";
import { useRouter } from "next/navigation";

const Button: React.FC<IButton> = (props) => {
  const {
    icon,
    size = "md",
    theme = "primary",
    className,
    iconColor = "white",
    iconDirection,
    children,
    disabled,
    isLoading,
    href,
    handler,
  } = props;

  const router = useRouter();

  const navigateTo = () => {
    if (href) {
      router.push(href);
    }
  };
  // router.push(href)
  return (
    <button
      className={cls(
        // size without icons
        size === "sm" &&
          !icon &&
          theme !== "filterPill" &&
          theme !== "ghostPill" &&
          "py-2 px-4",
        size === "md" &&
          !icon &&
          theme !== "filterPill" &&
          theme !== "ghostPill" &&
          "py-[10px] px-6",
        size === "lg" &&
          !icon &&
          theme !== "filterPill" &&
          theme !== "ghostPill" &&
          "py-5 px-10",

        // size without icons
        icon && "p-[10px]",

        // -------------------------------primary---------------------------------
        theme === "primary" && "bg-primary-500 text-black_01",
        theme === "primary" && !disabled && "hover:bg-primary-600",
        theme === "primary" && disabled && "bg-primary-200 cursor-not-allowed",
        // -------------------------------secondary---------------------------------
        theme === "secondary" && "bg-gray-800 text-white",
        theme === "secondary" && !disabled && "hover:bg-gray-900",
        theme === "secondary" && disabled && "bg-gray-400 cursor-not-allowed",
        // -------------------------------filterPill---------------------------------
        theme === "filterPill" && "py-[6px] px-3 bg-gray-800 text-white",
        theme === "filterPill" && !disabled && "hover:bg-gray-900",
        theme === "filterPill" && disabled && "bg-gray-400 cursor-not-allowed",
        // -------------------------------ghostPill---------------------------------
        theme === "ghostPill" && "py-[6px] px-3 bg-gray-100 text-gray-600",
        theme === "ghostPill" &&
          !disabled &&
          "hover:bg-gray-800 hover:text-white",
        // -------------------------------gray---------------------------------
        theme === "gray" && "bg-gray-100",
        theme === "gray" && !disabled && "hover:bg-gray-300",
        theme === "gray" && disabled && "bg-gray-100 cursor-not-allowed",

        "rounded-full transition-all text-center",
        className
      )}
      onClick={() => (href ? navigateTo() : handler ? handler() : null)}
      disabled={disabled}
    >
      {children && !isLoading && (
        <span
          className="block font-heading-font"
          style={{ whiteSpace: "nowrap" }}
        >
          {children}
        </span>
      )}

      {icon && !isLoading && (
        <Icon
          name={icon as "home"}
          size={
            size === "sm" ? 14 : size === "md" ? 20 : size === "lg" ? 26 : 14
          }
          color={theme === "gray" ? "gray" : iconColor}
          direction={iconDirection}
        />
      )}

      {isLoading && (
        <Icon
          name={"loading"}
          size={
            size === "sm" ? 14 : size === "md" ? 20 : size === "lg" ? 26 : 14
          }
          strokeWidth={10}
          color={theme === "gray" ? "gray" : iconColor}
        />
      )}
    </button>
  );
};

export default Button;
