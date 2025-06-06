import { IconSVGProps } from "../icon";
import cls from "classnames";

export const QuestionIcon: React.FC<IconSVGProps> = (props) => {
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
        d="M12 22C17.5234 22 22 17.5234 22 12C22 6.47656 17.5234 2 12 2C6.47656 2 2 6.47656 2 12C2 17.5234 6.47656 22 12 22ZM8.63281 8.45703C8.94141 7.58594 9.76953 7 10.6953 7H12.9727C14.3359 7 15.4375 8.10547 15.4375 9.46484C15.4375 10.3477 14.9648 11.1641 14.1992 11.6055L12.9375 12.3281C12.9297 12.8359 12.5117 13.25 12 13.25C11.4805 13.25 11.0625 12.832 11.0625 12.3125V11.7852C11.0625 11.4492 11.2422 11.1406 11.5352 10.9727L13.2656 9.98047C13.4492 9.875 13.5625 9.67969 13.5625 9.46875C13.5625 9.14062 13.2969 8.87891 12.9727 8.87891H10.6953C10.5625 8.87891 10.4453 8.96094 10.4023 9.08594L10.3867 9.13281C10.2148 9.62109 9.67578 9.875 9.19141 9.70312C8.70703 9.53125 8.44922 8.99219 8.62109 8.50781L8.63672 8.46094L8.63281 8.45703ZM13.25 15.75C13.25 16.4414 12.6914 17 12 17C11.3086 17 10.75 16.4414 10.75 15.75C10.75 15.0586 11.3086 14.5 12 14.5C12.6914 14.5 13.25 15.0586 13.25 15.75Z"
        fill={color}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
};

export default QuestionIcon;
