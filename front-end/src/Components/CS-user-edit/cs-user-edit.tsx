import { FC, useState } from "react";
import { StyledUserEdit } from "./cs-user-edit-styled";
import { UserEditModal } from "./cs-user-edit-modal";
import editIcon from "../../Images/edit_icon.png";

export const UserEdit: FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleOpen = () => {
    setModalIsOpen(true);
  };

  return (
    <StyledUserEdit>
      <img src={editIcon} onClick={handleOpen}/>
      <p>Edit information</p>
      {modalIsOpen && <UserEditModal setModalIsOpen={setModalIsOpen}/>}
    </StyledUserEdit>
  );
};
