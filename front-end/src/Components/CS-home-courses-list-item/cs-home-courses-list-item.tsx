import { FC } from "react";
import { coursesListItem } from "../../Utils/interfaces";

interface listItemProps {
  course: coursesListItem,
}

export const HomeCoursesListItem: FC<listItemProps> = (props) => {
  return (
    <li>
      {/* topic img */}
      {props.course.name}
      {props.course.topic}
      {props.course.description}
    </li>
  );
};
