import { FC } from "react";
import { useAppDispatch } from "../../Utils/hooks";
import { DeleteHandler } from "./cs-user-delete-handlers";

interface modalProps {
  setModalIsOpen: Function,
};

export const UserDeleteModal: FC<modalProps> = (props) => {
  const dispatch = useAppDispatch();
  const handleClose = () => {
    props.setModalIsOpen(false);
  };

  const handleDelete = () => {
    DeleteHandler(dispatch);
    props.setModalIsOpen(false);
  };

  return (<div>
    <p>Confirmation</p>
    <p>Account will be reverted</p>
    <p>it cannot be revert</p>
    <button onClick={handleClose}>I change my mind</button>
    <button onClick={handleDelete}>Confirm</button>
  </div>);
};
