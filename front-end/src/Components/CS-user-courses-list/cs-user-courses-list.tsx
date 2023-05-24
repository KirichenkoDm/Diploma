import { FC } from "react";
import { useAppSelector } from "../../Utils/hooks";
import { coursesListItem } from "../../Utils/interfaces";
import { StyledUserCoursesList } from "./cs-user-courses-list-styled";
import { UserCoursesListItem } from "./cs-user-courses-list-item";

export const UserCoursesList: FC = () => {
  const userCourses = useAppSelector(state => state.currentUser.courses);
  const userRole = useAppSelector(state => state.currentUser.role);
  return (
    <StyledUserCoursesList>
      {userCourses.map((course: coursesListItem) => <UserCoursesListItem course = {course} userRole = {userRole} />)}
    </StyledUserCoursesList>
  );
};
