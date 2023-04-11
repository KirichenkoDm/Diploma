import { FC } from "react";
const source = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoNaLFFSdD4YhW8mqgDBSWY8nHnte6ANHQWz6Lsl37yA&s";
export const HomeLink: FC = () => {
  return (
    <a href="/">
      <img src={source} alt="App icon"/>
    </a>
  );
};
