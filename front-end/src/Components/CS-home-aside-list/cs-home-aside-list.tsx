import { FC } from "react";
import { StyledHomeAsideList } from "./cs-home-aside-list-styled";
import { useAppSelector } from "../../Utils/hooks";
import { coursesListItem } from "../../Utils/interfaces";
import { HomeAsideListItem } from "./cs-home-aside-list-item";

export const HomeAsideList: FC = () => {
  const userCourses = useAppSelector(state => state.currentUser.courses);
  return (
    <StyledHomeAsideList>
      {userCourses.map(
        (course: coursesListItem, index: number) =>
          <HomeAsideListItem key = {index} course = {course} />
      )}
    </StyledHomeAsideList>
  );
};
