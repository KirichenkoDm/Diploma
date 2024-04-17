import { FC, useEffect } from "react";
import { UserIcon } from "../Components/CS-user-icon/cs-user-icon";
import { UserInfo } from "../Components/CS-user-info/cs-user-info";
import { UserEdit } from "../Components/CS-user-edit/cs-user-edit";
import { UserDelete } from "../Components/CS-user-delete/cs-user-delete";
import { UserCoursesList } from "../Components/CS-user-courses-list/cs-user-courses-list";
import { HomeLink } from "../Components/CS-home-link/CS-home-link";
import { useAppSelector } from "../Utils/hooks";
import { useNavigate } from "react-router-dom";
const UserPage: FC = () => {
  const currentUserName = useAppSelector(state => state.currentUser.name);
  const navigate = useNavigate();
  useEffect(() => {
    if (currentUserName === "Guest") {
      navigate("/singin");
    }
  }, []);
  return (
    <div>
      <HomeLink/>
      <UserIcon/>
      <UserInfo/>
      <UserEdit/>
      <UserDelete/>
      <UserCoursesList/>
    </div>
  );
};

export default UserPage;
