import { FC } from "react";
import { coursesListItem } from "../../Utils/interfaces";
import { Link } from "react-router-dom";
import { StyledHomeAsideListItem } from "./cs-home-aside-list-item-styled";

interface listItemProps {
  course: coursesListItem,
}

export const HomeAsideListItem: FC<listItemProps> = (props) => {
  return (
    <StyledHomeAsideListItem>
      <Link to = {`/course/${props.course.name}`}>
        <p>{props.course.name}</p>
        <p>{props.course.topic}</p>
      </Link>
    </StyledHomeAsideListItem>
  );
};
