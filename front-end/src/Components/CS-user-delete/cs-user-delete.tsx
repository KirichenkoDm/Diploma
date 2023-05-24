import { FC, useState } from "react";
import { StyledUserDelete } from "./cs-user-delete-styled";
import { UserDeleteModal } from "./cs-user-delete-modal";

export const UserDelete: FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleOpen = () => {
    setModalIsOpen(true);
  };

  return (
    <StyledUserDelete>
      <img src="delete" onClick={handleOpen}/>
      <p>Delete account</p>
      {modalIsOpen && <UserDeleteModal setModalIsOpen = {setModalIsOpen}/>}
    </StyledUserDelete>
  );
};
