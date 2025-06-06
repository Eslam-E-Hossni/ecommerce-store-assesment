import { IconSVGProps } from "../icon";
import cls from "classnames";
export const HomeIcon: React.FC<IconSVGProps> = (props) => {
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
        d="M2 10.6941C2 10.1307 2.23372 9.59645 2.65107 9.21666L10.6439 3.13585C11.4118 2.4347 12.5846 2.4347 13.3525 3.13585L21.3489 9.21665C21.7621 9.59644 22 10.1306 22 10.6941L20.0134 20.0525C19.6012 20.9429 19.1161 21.388 18.0102 21.388H5.98624C4.88025 21.388 4.4652 21.388 3.98294 20.0525L2 10.6941ZM9.99281 15.1556V17.8266C9.99281 18.3817 10.4394 18.717 10.9945 18.717H12.9977C13.5528 18.717 13.9994 18.3817 13.9994 17.8266V15.1556C13.9994 14.6005 13.5528 14.2652 12.9977 14.2652H10.9945C10.4394 14.2652 9.99281 14.6005 9.99281 15.1556Z"
        fill={color}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
};

export default HomeIcon;
