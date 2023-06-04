import { FC } from "react";

interface asideProps {
  setIsOpened: Function,
}

export const HomeAsideClosed: FC<asideProps> = (props) => {
  const handleOpen = () => {
    props.setIsOpened(true);
  };

  return (<>
    <button className="HomeAside-Open-Close" onClick={handleOpen}>{"<"}</button>
  </>);
};
