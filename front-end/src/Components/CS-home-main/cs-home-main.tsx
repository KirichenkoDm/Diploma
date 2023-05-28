import { FC } from "react";
import { StyledHomeMain } from "./cs-home-main-styled";
import { HomeCoursesList } from "../CS-home-courses-list/cs-home-courses-list";
import { HomeNavigationButton } from "../CS-home-navigation-button/cs-home-navigation-button";
import { useAppSelector } from "../../Utils/hooks";

export const HomeMain: FC = () => {
  const listCurrentPage = useAppSelector(state => state.homeCourses.searchData.page);
  return (
    <StyledHomeMain>
      <main>
        <HomeCoursesList/>
        <HomeNavigationButton direct = {+1}/>
        <p>{listCurrentPage}</p>
        <HomeNavigationButton direct = {-1}/>
      </main>
    </StyledHomeMain>
  );
};
