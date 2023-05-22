import { FC, useState } from "react";
import { UserIcon } from "../CS-user-icon/cs-user-icon";
import { StyledHomeAside } from "./CS-home-aside-styled";
import { HomeAsideOpened } from "./cs-home-aside-opened";
import { HomeAsideClosed } from "./cs-home-aside-closed";

export const HomeAside: FC = () => {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <StyledHomeAside>
      <UserIcon/>
      {
        isOpened
          ? <HomeAsideOpened setIsOpened={setIsOpened}/>
          : <HomeAsideClosed setIsOpened={setIsOpened}/>
      }
    </StyledHomeAside>
  );
};
