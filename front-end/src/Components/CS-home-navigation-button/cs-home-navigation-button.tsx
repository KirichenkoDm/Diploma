import { FC } from "react";
import { StyledHomeNavigationButton } from "./cs-home-navigation-button-styled";
import { useAppDispatch, useAppSelector } from "../../Utils/hooks";
import { ScrollHandler } from "./cs-home-navigation-button-handlers";

interface navigationButtonProps {
  direct: string,
}

export const HomeNavigationButton: FC<navigationButtonProps> = (props) => {
  const homeSearchData = useAppSelector(state => state.homeCourses.searchData);
  const dispatch = useAppDispatch();
  return (
    <StyledHomeNavigationButton>
      {props.direct === "forward"
        ? <button
          onClick={() => {
            homeSearchData.page++;
            ScrollHandler(homeSearchData, dispatch);
          }}
        />
        : <button
          onClick={() => {
            homeSearchData.page--;
            ScrollHandler(homeSearchData, dispatch);
          }}
        />}
    </StyledHomeNavigationButton>
  );
};
