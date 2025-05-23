/* eslint-disable */
import { IconSVGProps } from "..";
import {
  HomeIcon,
  GearIcon,
  HeadsetIcon,
  QuestionIcon,
  ChevronIcon,
  LoadingIcon,
  CartIcon,
  SearchIcon,
  CartPlusIcon,
  StarIcon,
  BackIcon,
} from "../../icons";

const ICONS: { [key: string]: { Component: React.FC<IconSVGProps> } } = {
  home: { Component: HomeIcon },
  gear: { Component: GearIcon },
  headset: { Component: HeadsetIcon },
  question: { Component: QuestionIcon },
  chevron: { Component: ChevronIcon },
  loading: { Component: LoadingIcon },
  cart: { Component: CartIcon },
  search: { Component: SearchIcon },
  "cart-plus": { Component: CartPlusIcon },
  star: { Component: StarIcon },
  back: { Component: BackIcon },
};

export default ICONS;
