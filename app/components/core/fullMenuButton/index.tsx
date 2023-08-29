import { Link } from "@remix-run/react";
import type { FullMenuButtonProps } from "./types";

const FullMenuButton = ({ to, ...rest }: FullMenuButtonProps) => {
  return (
    <Link className="flex justify-end items-center" to={to} {...rest}>
      <span className="h-[100px] flex justify-center items-center">
        <span className="mr-5">перейти</span>
        <svg
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          fill="white"
        >
          <path d="m31.71 15.29-10-10-1.42 1.42 8.3 8.29H0v2h28.59l-8.29 8.29 1.41 1.41 10-10a1 1 0 0 0 0-1.41z" />
        </svg>
      </span>
    </Link>
  );
};

export default FullMenuButton;
