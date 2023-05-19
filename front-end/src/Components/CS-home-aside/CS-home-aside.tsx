import { FC } from "react";
import { UserIcon } from "../CS-user-icon/cs-user-icon";
import { StyledHomeAside } from "./CS-home-aside-styled";
import { LogoutHandler } from "./cs-home-aside-handlers";
import { useAppDispatch, useAppSelector } from "../../Utils/hooks";
import { HomeAsideList } from "../CS-home-aside-list/cs-home-aside-list";
import { StyledHomeAsideAutorize } from "../CS-home-aside-autorize/cs-home-aside-autorise-styled";

export const HomeAside: FC = () => {
  const currentUser = useAppSelector(state => state.currentUser);
  const dispatch = useAppDispatch();
  return (
    <StyledHomeAside>
      <UserIcon/>
      <img src="logout" onClick={() => LogoutHandler(dispatch)}/>
      {
        currentUser.surname && <>
          <p>{currentUser.name + currentUser.surname}</p>
          <p>{currentUser.role}</p>
        </>
      }
      {
        currentUser.name === "Guest"
          ? <StyledHomeAsideAutorize/>
          : <HomeAsideList/>
      }
    </StyledHomeAside>
  );
};
