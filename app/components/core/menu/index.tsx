import { NavLink } from "@remix-run/react";
import type { MainMenuProps } from "./types";

const getVerticalString = (str: string): React.ReactNode => {
  return str.split("").map((sign, i) => (
    <span key={i + "sign"} className="block text-center">
      {sign.toUpperCase()}
    </span>
  ));
};

const MainMenu = ({ items }: MainMenuProps) => {
  return (
    <nav className={"h-full break-words relative z-10"}>
      <div className={"h-full flex flex-col items-center justify-center"}>
        {items.map(({ id, title, to, color }) => (
          <NavLink
            key={id + "main-menu"}
            to={to}
            className={`flex flex-col justify-center text-white font-bold text-base grow w-[50px] hover:bg-indigo-600 ${color}`}
          >
            {getVerticalString(title)}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default MainMenu;
