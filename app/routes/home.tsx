import type { V2_MetaFunction } from "@remix-run/node";
import { Outlet, useLocation } from "@remix-run/react";
import FullMenuItem from "~/components/core/fullMenuItem";
import MainMenu from "~/components/core/menu";
import MotionOutletWrapper from "~/components/core/motionOutletWrapper";

export const meta: V2_MetaFunction = () => [{ title: "HookahToba" }];

const routes = {
  home: {
    path: "/home",
  },
  random: {
    path: "random",
  },
  custom: {
    path: "custom",
  },
  mastermix: {
    path: "mastermix",
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
  const location = useLocation();
  const isRoot = location.pathname === "/home";

  return (
    <>
      <main className="relative h-full bg-slate-200 flex flex-col w-full text-white overflow-hidden">
        {isRoot &&
          itemsData.map(({ title, description, color, id, to }) => (
            <FullMenuItem
              key={id}
              title={title}
              description={description}
              className={color}
              to={to}
            />
          ))}

        {!isRoot && (
          <section className="relativ h-full w-full bg-cyan-600 flex flex-row">
            <MotionOutletWrapper>
              <Outlet />
            </MotionOutletWrapper>

            <div className="menu-wrapper">
              <MainMenu
                items={[
                  {
                    id: "fullmenu-mastermix-item-4",
                    title: "Home",
                    color: "bg-cyan-500",
                    to: routes.home.path,
                  },
                  ...itemsData,
                ]}
              />
            </div>
          </section>
        )}
      </main>
    </>
  );
}
