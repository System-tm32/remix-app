import { json, type V2_MetaFunction } from "@remix-run/node";
import { useLoaderData, useLocation, useOutlet } from "@remix-run/react";
import FullMenuItem from "~/components/core/fullMenuItem";
import MainMenu from "~/components/core/menu";
import MotionOutletWrapper from "~/components/core/motionOutletWrapper";
import routers from "~/utils/routers";

export const meta: V2_MetaFunction = () => [{ title: "HookahToba" }];

export const loader = async () => {
  return json(await import("../data/menu.json"));
};

export default function Index() {
  const location = useLocation();
  const outlet = useOutlet();
  const { items } = useLoaderData<typeof loader>();

  const isRoot = location.pathname === "/" + routers.home;

  return (
    <>
      <main className="relative h-screen bg-[#150F18] flex flex-col w-full text-white overflow-hidden p-10">
        {isRoot &&
          items
            .slice(0)
            .map(({ title, description, color, id, to, icon }) => (
              <FullMenuItem
                key={id}
                title={title}
                description={description}
                className={color}
                to={to}
                icon={icon}
              />
            ))}

        {!isRoot && (
          <section className="relativ h-full w-full bg-cyan-600 flex flex-row">
            <MotionOutletWrapper>{outlet}</MotionOutletWrapper>

            <div className="menu-wrapper">
              <MainMenu items={items} />
            </div>
          </section>
        )}
      </main>
      <footer className="h-[50px] bg-[#0B060D] text-[gray] p-5">
        © 2023 Калькулятор кальяных миксов
      </footer>
    </>
  );
}
