/* eslint-disable */
import { IconSVGProps } from "..";
import { HomeIcon, GearIcon, HeadsetIcon, QuestionIcon } from "../../icons";

const ICONS: { [key: string]: { Component: React.FC<IconSVGProps> } } = {
  home: { Component: HomeIcon },
  gear: { Component: GearIcon },
  headset: { Component: HeadsetIcon },
  question: { Component: QuestionIcon },
};

export default ICONS;
