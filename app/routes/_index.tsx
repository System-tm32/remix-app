import type { V2_MetaFunction } from "@remix-run/node";
import FullMenuItem from "~/components/core/fullMenuItem";

export const meta: V2_MetaFunction = () => [{ title: "HookahToba" }];

const routes = {
  random: {
    path: "/random",
  },
  custom: {
    path: "/custom",
  },
  mastermix: {
    path: "/mastermix",
  },
};

const itemsData = [
  {
    id: "fullmenu-random-item-0",
    title: "Random",
    description: "mix with a little personalization of your tastes",
    color: "bg-cyan-600",
    to: routes.random.path,
  },
  {
    id: "fullmenu-custom-item-1",
    title: "Custom",
    description: "expanded mix selection",
    color: "bg-cyan-700",
    to: routes.custom.path,
  },
  {
    id: "fullmenu-mastermix-item-2",
    title: "MasterMix",
    description: "multi-functional mix maker for guru",
    color: "bg-cyan-800",
    to: routes.mastermix.path,
  },
];

export default function Index() {
  return (
    <>
      <main className="relative h-full bg-slate-200 flex flex-col w-full text-white">
        {itemsData.map(({ title, description, color, id, to }) => (
          <FullMenuItem
            key={id}
            title={title}
            description={description}
            className={color}
            to={to}
          />
        ))}
      </main>
    </>
  );
}
