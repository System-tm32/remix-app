import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => [{ title: "Recipe" }];

export default function HomePage() {
  return <main className="relativ h-full">Recipe</main>;
}
