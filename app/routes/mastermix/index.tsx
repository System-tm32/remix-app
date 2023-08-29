import { type V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => [{ title: "Random" }];

export default function Page() {
  return <div className="mastermix">mastermix</div>;
}
