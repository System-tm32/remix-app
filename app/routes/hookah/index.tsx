import type { LinksFunction, V2_MetaFunction } from "@remix-run/node";
import styles from "./styles.css";
import { cssBundleHref } from "@remix-run/css-bundle";
import { Link, Outlet } from "@remix-run/react";
import MainMenu from "~/components/core/menu";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: styles }] : []),
];

export const meta: V2_MetaFunction = () => [{ title: "Hookah Page" }];

export default function HomePage() {
  return (
    <main className="relativ h-full w-full flex flex-row">
      <div className="content grow">
        <Link to={"recipe"}>Go recipe</Link>
        <br />
        <Link to={"/hookah"}>Back</Link>
        <div className="border border-indigo-600 ">
          <Outlet />
        </div>
      </div>

      <div className="menu-wrapper">
        <MainMenu />
      </div>
    </main>
  );
}
