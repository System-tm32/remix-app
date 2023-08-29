import FullMenuButton from "../fullMenuButton";
import type { FullMenuItemsCombineButtonProps } from "./types";

const FullMenuItem = ({
  title,
  description,
  className,
  to,
  ...rest
}: FullMenuItemsCombineButtonProps) => {
  return (
    <div className={`grow p-5 shrink min-h-[250spx] ${className}`} {...rest}>
      <h2 className="text-6xl">{title}</h2>
      <p className="mt-5 text-lg">{description}</p>
      <div className="button-wrapper w-full text-right">
        <FullMenuButton to={to} />
      </div>
    </div>
  );
};

export default FullMenuItem;
