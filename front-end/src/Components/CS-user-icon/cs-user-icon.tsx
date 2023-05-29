import { FC } from "react";
import { useAppSelector } from "../../Utils/hooks";
import { StyledUserIcon } from "./cs-user-icon-styled";
import { Link } from "react-router-dom";
import userIcon from "../../Images/user_icon.png";

export const UserIcon: FC = () => {
  const user = useAppSelector(state => state.currentUser);
  const icon = user.name === "Guest"
    ? <Link to = {"/singin"}>
      <img src={userIcon} />
    </Link>
    : <Link to = {`/user/${user._id}`}>
      {user.name.slice(0, 1) + user.surname!.slice(0, 1)}
    </Link>;
  return (
    <StyledUserIcon>
      {icon}
    </StyledUserIcon>
  );
};
