import { FC } from "react";
import { coursesListItem } from "../../Utils/interfaces";

interface listItemProps {
  course: coursesListItem,
}

export const HomeAsideListItem: FC<listItemProps> = (props) => {
  return (
    <div>
      <p>{props.course.name}</p>
      <p>{props.course.topic}</p>
    </div>
  );
};
