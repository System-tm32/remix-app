import {
  CasinoIcon,
  PuzzleIcon,
  ShishaIcon,
} from "~/components/ui/icons/icons";
import FullMenuButton from "../fullMenuButton";
import type { FullMenuItemsCombineButtonProps } from "./types";
import bgItem0 from "./item-0.png";
import bgItem1 from "./item-1.png";
import bgItem2 from "./item-2.png";

const bgs = {
  casino: bgItem0,
  puzzle: bgItem1,
  shisha: bgItem2,
};

const icons = {
  casino: <CasinoIcon />,
  puzzle: <PuzzleIcon />,
  shisha: <ShishaIcon />,
};

const FullMenuItem = ({
  title,
  description,
  className,
  to,
  icon,
  ...rest
}: FullMenuItemsCombineButtonProps) => {
  return (
    <div
      className={`grow p-5 mb-5 shrink relative bg-no-repeat ${className}`}
      style={{
        background: `url(${bgs[icon as keyof typeof bgs]})`,
      }}
      {...rest}
    >
      <h2 className="text-6xl">{title} </h2>
      <div className="w-[80px] absolute right-5 top-10">
        {icons[icon as keyof typeof icons]}
      </div>
      <p className="mt-5 text-lg">{description}</p>
      <div className="button-wrapper w-full text-right">
        <FullMenuButton to={to} />
      </div>
    </div>
  );
};

export default FullMenuItem;
