import type { FullMenuButtonProps } from "../fullMenuButton/types";

export interface FullMenuItemProps
  extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  icon: React.ReactNode;
  description: string;
  className: string;
}

export type FullMenuItemsCombineButtonProps = FullMenuItemProps &
  FullMenuButtonProps;
