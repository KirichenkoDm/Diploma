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

  const Close = () => {
    props.setIsOpened(false);
  };

  const Logout = () => {
    LogoutHandler(dispatch);
  };

  return (<>
    <button onClick={Close}>{">>>"}</button>
    {
      currentUser.email && <>
        <img src="logout" onClick={Logout}/>
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
