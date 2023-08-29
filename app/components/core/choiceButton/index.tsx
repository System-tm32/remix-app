import type { ChoiceButtonProps } from "./types";

const ChoiceButton = ({ children, ...rest }: ChoiceButtonProps) => {
  return (
    <div
      className="inline-block border-solid border-2 border-indigo-600 m-1 p-2 hover:bg-indigo-600 hover:text-white"
      {...rest}
    >
      {children}
    </div>
  );
};

export default ChoiceButton;
