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
  SearchIcon
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
};

export default ICONS;
