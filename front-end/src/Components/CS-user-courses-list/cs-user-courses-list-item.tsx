import { FC } from "react";
import { coursesListItem } from "../../Utils/interfaces";
import { Roles } from "../../Utils/enums";
import { DeleteCourseHandler, LeaveCourseHandler } from "./cs-user-courses-list-handlers";
import { useAppDispatch } from "../../Utils/hooks";
import { Link } from "react-router-dom";

interface listItemProps {
  course: coursesListItem,
  userRole: Roles,
}

export const UserCoursesListItem: FC<listItemProps> = (props) => {
  const dispatch = useAppDispatch();

  const handleDelete = () => {
    DeleteCourseHandler(props.course.name, dispatch);
  };

  const handleLeave = () => {
    LeaveCourseHandler(props.course.name, dispatch);
  };

  return (
    <div>
      <Link to = {`/course/${props.course.name}`}>
        <div>
          <>{/* topic img */}</>
          <p>{props.course.name}</p>
          <p>{props.course.topic}</p>
          <p>{props.course.description}</p>
        </div>
      </Link>
      {
        props.userRole === Roles.teacher
          ? <>
            <img src="delete" onClick={handleDelete}/>
            <p>Delete course</p>
          </>
          : <>
            <img src="leave" onClick={handleLeave}/>
            <p>Leave course</p>
          </>
      }
    </div>
  );
};
