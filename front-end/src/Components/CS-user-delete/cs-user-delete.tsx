import { FC, useState } from "react";
import { StyledUserDelete } from "./cs-user-delete-styled";
import { UserDeleteModal } from "./cs-user-delete-modal";
import deleteIcon from "../../Images/delete_icon.png";

export const UserDelete: FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleOpen = () => {
    setModalIsOpen(true);
  };

  return (
    <StyledUserDelete>
      <img src={deleteIcon} onClick={handleOpen}/>
      <p>Delete account</p>
      {modalIsOpen && <UserDeleteModal setModalIsOpen = {setModalIsOpen}/>}
    </StyledUserDelete>
  );
};
