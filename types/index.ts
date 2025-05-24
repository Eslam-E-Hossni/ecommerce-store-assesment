export interface IButton {
  size?: "xs" | "sm" | "md" | "lg";
  icon?:
    | "home"
    | "gear"
    | "headset"
    | "question"
    | "chevron"
    | "cart"
    | "cart-plus"
    | "star";
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
  href?: string;
  handler?: () => void;
}

export type PageProps<T extends Record<string, string>> = {
  params: T;
  searchParams?: Record<string, string | string[] | undefined>;
};