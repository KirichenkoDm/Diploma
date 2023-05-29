import { FC, useEffect } from "react";
import { StyledHomeAsideList } from "./cs-home-aside-list-styled";
import { useAppDispatch, useAppSelector } from "../../Utils/hooks";
import { coursesListItem } from "../../Utils/interfaces";
import { HomeAsideListItem } from "./cs-home-aside-list-item";
import { FetchStatus } from "../../Utils/enums";
import { fetchUserCourses } from "../../Store/currentUser.slice";

export const HomeAsideList: FC = () => {
  const userCourses = useAppSelector(state => state.currentUser.courses);
  const fetchStatus = useAppSelector(state => state.currentUser.fetchStatus);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (fetchStatus === FetchStatus.succeeded) {
      dispatch(fetchUserCourses());
    }
  }, []);
  return (
    <StyledHomeAsideList>
      {userCourses.map(
        (course: coursesListItem, index: number) =>
          <HomeAsideListItem key = {index} course = {course} />
      )}
    </StyledHomeAsideList>
  );
};
