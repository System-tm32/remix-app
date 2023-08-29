import { type V2_MetaFunction } from "@remix-run/node";
import ChoiceButton from "~/components/core/choiceButton";
import MainMenu from "~/components/core/menu";

export const meta: V2_MetaFunction = () => [{ title: "Random" }];

export default function Page() {
  return (
    <main className="relativ h-full w-full bg-cyan-600 flex flex-row">
      <div className="content grow p-8">
        <h2>Крепость</h2>
        <ChoiceButton>Легкий</ChoiceButton>
        <ChoiceButton>Средний</ChoiceButton>
        <ChoiceButton>Крепкий</ChoiceButton>
      </div>

      <div className="menu-wrapper">
        <MainMenu />
      </div>
    </main>
  );
}
