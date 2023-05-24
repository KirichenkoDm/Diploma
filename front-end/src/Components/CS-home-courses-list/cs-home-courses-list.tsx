import { FC } from "react";
import { useAppSelector } from "../../Utils/hooks";
import { StyledHomeCoursesList } from "./cs-home-courses-list-styled";
import { coursesListItem } from "../../Utils/interfaces";
import { HomeCoursesListItem } from "./cs-home-courses-list-item";

export const HomeCoursesList: FC = () => {
  const homeCourses = useAppSelector(state => state.homeCourses.coursesList);
  return (
    <StyledHomeCoursesList>
      {homeCourses.map((course:coursesListItem) => <HomeCoursesListItem course = {course} />)}
    </StyledHomeCoursesList>
  );
};
