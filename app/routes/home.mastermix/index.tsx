import { type V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => [{ title: "Random" }];

export default function Page() {
  return (
    <main className="relativ h-full w-full bg-cyan-800 flex flex-row">
      <div className="content grow p-8">
        <h2>MASTERMIX</h2>
      </div>
    </main>
  );
}
