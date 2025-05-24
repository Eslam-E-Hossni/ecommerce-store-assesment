import { IBadge } from "@/types";

export const Badge: React.FC<IBadge> = (props) => {
  const { label } = props;
  return (
    <span className="inline-block text-sm lg:text-base py-[6px] px-3 bg-gray-800 text-white rounded-full capitalize">
      {label}
    </span>
  );
};
