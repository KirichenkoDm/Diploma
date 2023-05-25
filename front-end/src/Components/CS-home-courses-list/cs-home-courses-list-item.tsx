import { FC } from "react";
import { coursesListItem } from "../../Utils/interfaces";
import { Link } from "react-router-dom";

interface listItemProps {
  course: coursesListItem,
}

export const HomeCoursesListItem: FC<listItemProps> = (props) => {
  return (
    <div>
      <Link to = {`/course/${props.course.name}`}>
        <>{/* topic img */}</>
        <p>{props.course.name}</p>
        <p>{props.course.topic}</p>
        <p>{props.course.description}</p>
      </Link>
    </div>
  );
};
