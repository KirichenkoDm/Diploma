import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../Utils/hooks";
import { HomeAsideList } from "../CS-home-aside-list/cs-home-aside-list";
import { HomeAsideAutorize } from "../CS-home-aside-autorize/cs-home-aside-autorise";
import { LogoutHandler } from "./cs-home-aside-handlers";
interface asideProps {
  setIsOpened: Function,
}

export const HomeAsideOpened: FC<asideProps> = (props) => {
  const currentUser = useAppSelector(state => state.currentUser);
  const dispatch = useAppDispatch();
  const handleClose = () => {
    props.setIsOpened(false);
  };
  const handleLogout = () => {
    LogoutHandler(dispatch);
  };

  return (<>
    <button onClick={handleClose}>{">>>"}</button>
    {
      currentUser.email && <>
        <img src="logout" onClick={handleLogout}/>
        <p>{currentUser.name + currentUser.surname}</p>
        <p>{currentUser.role}</p>
      </>
    }
    {
      currentUser.name === "Guest"
        ? <HomeAsideAutorize/>
        : <HomeAsideList/>
    }
  </>);
};
