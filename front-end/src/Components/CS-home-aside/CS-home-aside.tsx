import { FC, useState } from "react";
import { UserIcon } from "../CS-user-icon/cs-user-icon";
import { StyledHomeAside } from "./CS-home-aside-styled";
import { HomeAsideOpened } from "./cs-home-aside-opened";
import { HomeAsideClosed } from "./cs-home-aside-closed";
import { useAppSelector } from "../../Utils/hooks";

export const HomeAside: FC = () => {
  const isAutorised = (useAppSelector(state => state.currentUser.name) !== "Guest");
  const [isOpened, setIsOpened] = useState(false);
  return (
    <StyledHomeAside isAutorised = {isAutorised} asideOpened = {isOpened}>
      <aside>
        <UserIcon/> {/* 1 */}
        {
          isOpened
            ? <HomeAsideOpened setIsOpened={setIsOpened}/>
            : <HomeAsideClosed setIsOpened={setIsOpened}/>
        }
      </aside>
    </StyledHomeAside>
  );
};
