import styles from "./styles.module.css";

const getVerticalString = (str: string): React.ReactNode => {
  return str
    .split("")
    .map((sign, i) => <span key={i + "sign"}>{sign.toUpperCase()}</span>);
};

const menu = [
  { id: 0, title: "random", link: "" },
  { id: 1, title: "custom", link: "" },
  { id: 2, title: "mastermix", link: "" },
];

const MainMenu = () => {
  return (
    <nav className={"h-full break-words"}>
      <ul className={"h-full flex flex-col items-center justify-center"}>
        {menu.map(({ id, title }) => (
          <li className={styles.item} key={id + "main-menu"}>
            {getVerticalString(title)}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MainMenu;
