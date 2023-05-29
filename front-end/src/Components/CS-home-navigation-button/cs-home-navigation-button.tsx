import { FC } from "react";
import { StyledHomeNavigationButton } from "./cs-home-navigation-button-styled";
import { useAppDispatch, useAppSelector } from "../../Utils/hooks";
import { ScrollHandler } from "./cs-home-navigation-button-handlers";

interface navigationButtonProps {
  direct: number,
}

export const HomeNavigationButton: FC<navigationButtonProps> = (props) => {
  const homeSearchData = useAppSelector(state => state.homeCourses.searchData);
  const fetchStatus = useAppSelector(state => state.homeCourses.fetchStatus);
  const dispatch = useAppDispatch();
  return (
    <StyledHomeNavigationButton>
      {props.direct === +1
        ? <button
          disabled={!homeSearchData.nextPagePossible}
          onClick={() => {
            // homeSearchData.page++;
            ScrollHandler(homeSearchData, dispatch, fetchStatus, props.direct);
          }}
        >{">>"}</button>
        : <button
          disabled={homeSearchData.page === 1}
          onClick={() => {
            // homeSearchData.page--;
            ScrollHandler(homeSearchData, dispatch, fetchStatus, props.direct);
          }}
        >{"<<"}</button>}
    </StyledHomeNavigationButton>
  );
};
