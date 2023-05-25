import { FC } from "react";
import { coursesListItem } from "../../Utils/interfaces";
import { Link } from "react-router-dom";

interface listItemProps {
  course: coursesListItem,
}

export const HomeAsideListItem: FC<listItemProps> = (props) => {
  return (
    <Link to = {`/course/${props.course.name}`}>
      <div>
        <p>{props.course.name}</p>
        <p>{props.course.topic}</p>
      </div>
    </Link>
  );
};
