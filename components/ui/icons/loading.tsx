import { IconSVGProps } from "../icon";

export const LoadingIcon: React.FC<IconSVGProps> = (props) => {
  const { color = "white", size = 24, strokeWidth = 1.5 } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      width={size}
      height={size}
    >
      <g>
        <circle
          strokeDasharray="164.93361431346415 56.97787143782138"
          r="35"
          strokeWidth={strokeWidth}
          stroke={color}
          fill="none"
          cy="50"
          cx="50"
        >
          <animateTransform
            keyTimes="0;1"
            values="0 50 50;360 50 50"
            dur="0.7s"
            repeatCount="indefinite"
            type="rotate"
            attributeName="transform"
          ></animateTransform>
        </circle>
      </g>
    </svg>
  );
};

export default LoadingIcon;
