export interface IButton {
  size?: "sm" | "md" | "lg";
  icon?: "home" | "gear" | "headset" | "question" | "chevron" | "cart";
  iconColor?:
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
  theme?:
    | "primary"
    | "secondary"
    | "filterPill"
    | "ghost"
    | "ghostPill"
    | "gray";
  iconDirection?: "up" | "down" | "left" | "right";
  className?: string;
  children?: React.ReactNode;
  disabled?: boolean;
  isLoading?: boolean;
  handler?: () => void;
}
