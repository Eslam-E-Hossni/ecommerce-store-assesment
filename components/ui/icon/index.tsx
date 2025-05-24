"use client";
import { useState } from "react";

import ICONS from "./icon-pack";

export interface IconProps {
  name:
    | "home"
    | "gear"
    | "headset"
    | "question"
    | "chevron"
    | "loading"
    | "cart"
    | "cart-plus"
    | "search"
    | "star"
    | "back";
  isHoverd?: boolean;

  direction?: "up" | "down" | "left" | "right";
  color?:
    | "darkGray"
    | "gray"
    | "white"
    | "primary"
    | "primaryLight"
    | "black"
    | "alert"
    | "lightGray"
    | "success"
    | "danger";
  fillColor?:
    | "darkGray"
    | "gray"
    | "white"
    | "primary"
    | "primaryLight"
    | "black"
    | "alert"
    | "lightGray";
  borderColor?:
    | "darkGray"
    | "gray"
    | "white"
    | "primary"
    | "primaryLight"
    | "black"
    | "alert"
    | "lightGray";

  hoverColor?:
    | "darkGray"
    | "gray"
    | "white"
    | "primary"
    | "primaryLight"
    | "black"
    | "alert"
    | "lightGray";
  size?: number;
  strokeWidth?: number;
  animated?: boolean;
  className?: string;
}

export interface IconSVGProps {
  size?: number;
  direction?: string;
  color?: string;
  fillColor?: string;
  borderColor?: string;
  strokeWidth?: number;
  animated?: boolean;
}

const COLOR = {
  white: "white",
  darkGray: "#454F5B",
  gray: "#919EAB",
  primary: "#FFC831",
  primaryLight: "#FFDA64",
  black: "black",
  alert: "#C37A37",
  lightGray: "#f1f1f1",
  success: "#07C21A",
  danger: "#F00028",
};

export const Icon = ({
  name,
  direction,
  color = "gray",
  fillColor = "gray",
  borderColor = "gray",
  hoverColor,
  size,
  strokeWidth = 2,
  animated = false,
  className,
  isHoverd = false,
}: IconProps) => {
  const [isHover, setIsHover] = useState(false);

  const { Component } = ICONS[name as keyof React.FC<IconSVGProps>];

  return (
    <i
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={className}
    >
      <Component
        size={size}
        direction={direction}
        color={
          (isHover || isHoverd) && hoverColor ? COLOR[hoverColor] : COLOR[color]
        }
        fillColor={
          (isHover || isHoverd) && hoverColor
            ? COLOR[hoverColor]
            : COLOR[fillColor]
        }
        borderColor={
          (isHover || isHoverd) && hoverColor
            ? COLOR[hoverColor]
            : COLOR[borderColor]
        }
        strokeWidth={strokeWidth}
        animated={animated}
      />
    </i>
  );
};

export default Icon;
