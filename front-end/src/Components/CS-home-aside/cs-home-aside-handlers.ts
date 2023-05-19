import { logOut } from "../../Store/currentUser.slice";

export const LogoutHandler = (dispatch: any) => {
  dispatch(logOut());
};
