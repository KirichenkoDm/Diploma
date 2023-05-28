import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../Utils/hooks";
import { StyledHomeCoursesList } from "./cs-home-courses-list-styled";
import { coursesListItem } from "../../Utils/interfaces";
import { HomeCoursesListItem } from "./cs-home-courses-list-item";
import { fetchCoursesList } from "../../Store/homeCourses.slice";
import { FetchStatus } from "../../Utils/enums";

export const HomeCoursesList: FC = () => {
  const homeCourses = useAppSelector(state => state.homeCourses.coursesList);
  const fetchStatus = useAppSelector(state => state.homeCourses.fetchStatus);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (fetchStatus === FetchStatus.idle) {
      dispatch(fetchCoursesList());
    }
  }, [fetchStatus, dispatch]);
  return (
    <StyledHomeCoursesList>
      {homeCourses.map(
        (course:coursesListItem, index) =>
          <HomeCoursesListItem key={index} course = {course} />
      )}
    </StyledHomeCoursesList>
  );
};
