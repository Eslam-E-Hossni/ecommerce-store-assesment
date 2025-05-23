import { IconSVGProps } from "../icon";
import cls from "classnames";

export const ChevronIcon: React.FC<IconSVGProps> = (props) => {
  const {
    direction,
    color = "white",
    size = 24,
    strokeWidth = 1.5,
    animated = false,
  } = props;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cls(
        animated && "transition-all",
        direction === "up" && "rotate-90",
        direction === "down" && "-rotate-90",
        direction === "left" && "rotate-0",
        direction === "right" && "rotate-180"
      )}
    >
      <path
        d="M16.1737 2C16.6001 2 17.0267 2.16275 17.3517 2.48825C18.0027 3.13925 18.0027 4.19387 17.3517 4.84487L10.1949 11.9994L17.3517 19.1551C18.0027 19.8061 18.0027 20.8608 17.3517 21.5118C16.7007 22.1627 15.6461 22.1628 14.9951 21.5118L6.66231 13.179C6.01131 12.528 6.01131 11.4733 6.66231 10.8223L14.9951 2.48955C15.3206 2.16145 15.7471 2 16.1737 2Z"
        fill={color}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
};

export default ChevronIcon;
