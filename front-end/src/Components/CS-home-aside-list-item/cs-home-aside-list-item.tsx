import { FC } from "react";
import { coursesListItem } from "../../Utils/interfaces";

interface listItemProps {
  course: coursesListItem,
}

export const HomeAsideListItem: FC<listItemProps> = (props) => {
  return (
    <ul>
      <li>{props.course.name}</li>
      <li>{props.course.topic}</li>
    </ul>
  );
};
