import { FC, useState } from "react";
import { StyledUserEdit } from "./cs-user-edit-styled";
import { UserEditModal } from "./cs-user-edit-modal";

export const UserEdit: FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleOpen = () => {
    setModalIsOpen(true);
  };

  return (
    <StyledUserEdit>
      <img src="edit" onClick={handleOpen}/>
      <p>Edit information</p>
      {modalIsOpen && <UserEditModal setModalIsOpen={setModalIsOpen}/>}
    </StyledUserEdit>
  );
};
