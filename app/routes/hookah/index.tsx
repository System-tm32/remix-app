import {
  json,
  type LinksFunction,
  type V2_MetaFunction,
} from "@remix-run/node";
import styles from "./styles.css";
import { cssBundleHref } from "@remix-run/css-bundle";
import { Link, Outlet, useLoaderData } from "@remix-run/react";
import MainMenu from "~/components/core/menu";
import { prisma } from "~/db.server";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: styles }] : []),
];

export const meta: V2_MetaFunction = () => [{ title: "Hookah Page" }];

export const loader = async () => {
  return json(await prisma.user.findMany());
};

export default function HomePage() {
  const users = useLoaderData<typeof loader>();
  console.log(users);
  return (
    <main className="relativ h-full w-full flex flex-row">
      <div className="content grow">
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.email}</li>
          ))}
        </ul>
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
