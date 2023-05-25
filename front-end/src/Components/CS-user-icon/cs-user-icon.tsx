import { FC } from "react";
import { useAppSelector } from "../../Utils/hooks";
import { StyledUserIcon } from "./cs-user-icon-styled";
import { Link } from "react-router-dom";

export const UserIcon: FC = () => {
  const user = useAppSelector(state => state.currentUser);
  const icon = user.name === "Guest"
    ? <Link to = {"/singin"}>
      <img src={""/* guest icon */} />
    </Link>
    : <Link to = {`/user/${user.name}_${user.surname}`}>
      {user.name.slice(0, 1) + user.surname!.slice(0, 1)}
    </Link>;
  return (
    <StyledUserIcon>
      {icon}
    </StyledUserIcon>
  );
};