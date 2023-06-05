import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../Utils/hooks";
import { StyledHomeCoursesList } from "./cs-home-courses-list-styled";
import { coursesListItem } from "../../Utils/interfaces";
import { HomeCoursesListItem } from "./cs-home-courses-list-item";
import { fetchCoursesList } from "../../Store/homeCourses.slice";
// import { FetchStatus } from "../../Utils/enums";
import { fetchUserCourses } from "../../Store/currentUser.slice";

export const HomeCoursesList: FC = () => {
  const currentUser = useAppSelector(state => state.currentUser._id);
  const homeCourses = useAppSelector(state => state.homeCourses.coursesList);
  // const fetchStatusUser = useAppSelector(state => state.currentUser.fetchStatus);
  // const fetchStatusCourses = useAppSelector(state => state.homeCourses.fetchStatus);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (currentUser) {
      dispatch(fetchUserCourses());
    }
    dispatch(fetchCoursesList());
  }, []);

  return (
    <StyledHomeCoursesList>
      {homeCourses.map(
        (course:coursesListItem, index) =>
          <HomeCoursesListItem key={index} course = {course} />
      )}
    </StyledHomeCoursesList>
  );
};
