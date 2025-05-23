import { IconSVGProps } from "../icon";
export const SearchIcon: React.FC<IconSVGProps> = (props) => {
  const { color = "white", size = 24, strokeWidth = 1.5 } = props;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.2476 8.12381C16.2476 9.91652 15.6657 11.5725 14.6853 12.9161L19.6299 17.8646C20.1181 18.3528 20.1181 19.1456 19.6299 19.6338C19.1417 20.1221 18.3489 20.1221 17.8607 19.6338L12.9161 14.6853C11.5725 15.6696 9.91652 16.2476 8.12381 16.2476C3.63619 16.2476 0 12.6114 0 8.12381C0 3.63619 3.63619 0 8.12381 0C12.6114 0 16.2476 3.63619 16.2476 8.12381ZM8.12381 13.748C11.2288 13.748 13.748 11.2288 13.748 8.12381C13.748 5.0188 11.2288 2.49963 8.12381 2.49963C5.0188 2.49963 2.49963 5.0188 2.49963 8.12381C2.49963 11.2288 5.0188 13.748 8.12381 13.748Z"
        fill={color}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
};

export default SearchIcon;
