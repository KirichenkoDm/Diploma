import { FC } from "react";
import { useAppSelector } from "../../Utils/hooks";
import { StyledUserIcon } from "./cs-user-icon-styled";

export const UserIcon: FC = () => {
  const user = useAppSelector(state => state.currentUser);
  const icon = user.name === "Guest"
    ? <a href="/singin"><img src={""/* guest icon */} /></a>
    : user.name.slice(0, 1) + user.surname!.slice(0, 1);
  return (
    <StyledUserIcon>
      <a href="">{icon}</a>
    </StyledUserIcon>
  );
};
