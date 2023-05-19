import { FC } from "react";
import { HomeNav } from "../Components/CS-home-nav/cs-home-nav";
import { HomeMain } from "../Components/CS-home-main/cs-home-main";
import { Credits } from "../Components/CS-credits/cs-credits";
import { HomeAside } from "../Components/CS-home-aside/CS-home-aside";

const HomePage: FC = () => {
  return (
    <div>
      <HomeNav/>
      <HomeMain/>
      <HomeAside/>
      <Credits/>
    </div>
  );
};

export default HomePage;
