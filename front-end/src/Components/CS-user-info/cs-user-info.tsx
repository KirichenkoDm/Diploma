import { FC } from "react";
import { StyledUserInfo } from "./cs-user-info-styled";
import { useAppSelector } from "../../Utils/hooks";

export const UserInfo: FC = () => {
  const currentUser = useAppSelector(state => state.currentUser);
  return (
    <StyledUserInfo>
      <p>{currentUser.name}</p>
      <p>{currentUser.surname}</p>
      <p>{currentUser.role}</p>
      <p>{currentUser.email}</p>
    </StyledUserInfo>
  );
};
