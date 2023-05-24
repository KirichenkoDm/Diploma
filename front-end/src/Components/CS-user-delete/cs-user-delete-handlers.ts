import { deleteAccount } from "../../Store/currentUser.slice";

export const DeleteHandler = (dispatch: any) => {
  dispatch(deleteAccount());
};
