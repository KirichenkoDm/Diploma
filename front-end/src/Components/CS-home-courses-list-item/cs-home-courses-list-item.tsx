import { FC } from "react";
import { coursesListItem } from "../../Utils/interfaces";

interface listItemProps {
  course: coursesListItem,
}

export const HomeCoursesListItem: FC<listItemProps> = (props) => {
  return (
    <ul>
      <li>{/* topic img */}</li>
      <li>{props.course.name}</li>
      <li>{props.course.topic}</li>
      <li>{props.course.description}</li>
    </ul>
  );
};
