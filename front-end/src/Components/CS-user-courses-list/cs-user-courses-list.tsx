import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../Utils/hooks";
import { coursesListItem } from "../../Utils/interfaces";
import { StyledUserCoursesList } from "./cs-user-courses-list-styled";
import { UserCoursesListItem } from "./cs-user-courses-list-item";
import { FetchStatus } from "../../Utils/enums";
import { fetchUserCourses } from "../../Store/currentUser.slice";

export const UserCoursesList: FC = () => {
  const userCourses = useAppSelector(state => state.currentUser.courses);
  const userRole = useAppSelector(state => state.currentUser.role);
  const fetchStatus = useAppSelector(state => state.currentUser.fetchStatus);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (fetchStatus === FetchStatus.succeeded) {
      dispatch(fetchUserCourses());
    }
  }, []);
  return (
    <StyledUserCoursesList>
      {userCourses.map(
        (course: coursesListItem, index: number) =>
          <UserCoursesListItem key = {index} course = {course} userRole = {userRole} />
      )}
    </StyledUserCoursesList>
  );
};
