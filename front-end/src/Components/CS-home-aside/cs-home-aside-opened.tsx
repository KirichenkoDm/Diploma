import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../Utils/hooks";
import { HomeAsideList } from "../CS-home-aside-list/cs-home-aside-list";
import { HomeAsideAutorize } from "../CS-home-aside-autorize/cs-home-aside-autorise";
import { LogoutHandler } from "./cs-home-aside-handlers";
import logoutIcon from "../../Images/logout_icon.png";

interface asideProps {
  setIsOpened: Function,
}

export const HomeAsideOpened: FC<asideProps> = (props) => {
  const currentUser = useAppSelector(state => state.currentUser);
  const dispatch = useAppDispatch();

  const Close = () => {
    props.setIsOpened(false);
  };

  const Logout = () => {
    LogoutHandler(dispatch);
  };

  return (<>
    <button className="HomeAside-Open-Close" onClick={Close}>{">"}</button>
    {
      currentUser.email && <>
        <img className="HomeAsideOpened-Logout" src={logoutIcon} onClick={Logout}/> {/* 2 */}
        <p className="HomeAsideOpened-NameSurname">{currentUser.name + " " + currentUser.surname}</p> {/* 3 */}
        <p className="HomeAsideOpened-Role">{currentUser.role}</p> {/* 4 */}
      </>
    }
    {
      currentUser.name === "Guest"
        ? <HomeAsideAutorize/>
        : <HomeAsideList/>
    }
  </>);
};
