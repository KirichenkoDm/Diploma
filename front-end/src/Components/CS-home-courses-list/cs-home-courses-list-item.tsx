import { FC } from "react";
import { coursesListItem } from "../../Utils/interfaces";

interface listItemProps {
  course: coursesListItem,
}

export const HomeCoursesListItem: FC<listItemProps> = (props) => {
  return (
    <div>
      <>{/* topic img */}</>
      <p>{props.course.name}</p>
      <p>{props.course.topic}</p>
      <p>{props.course.description}</p>
    </div>
  );
};
