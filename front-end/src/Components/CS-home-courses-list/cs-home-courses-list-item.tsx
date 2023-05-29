import { FC } from "react";
import { coursesListItem } from "../../Utils/interfaces";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../Utils/hooks";
import joinCourseIcon from "../../Images/join_course.png";
import leaveCourseIcon from "../../Images/leave_course.png";
import { JoinCourseHandler, LeaveCourseHandler } from "./cs-home-courses-list-handlers";

interface listItemProps {
  course: coursesListItem,
}

export const HomeCoursesListItem: FC<listItemProps> = (props) => {
  const userCourses = useAppSelector(state => state.currentUser.courses);
  const userName = useAppSelector(state => state.currentUser.name);
  const dispatch = useAppDispatch();

  const JoinCourse = () => {
    JoinCourseHandler(dispatch, props.course._id);
  };

  const LeaveCourse = () => {
    LeaveCourseHandler(dispatch, props.course._id);
  };

  let addIcon = null;
  if (userName !== "Guest") {
    if (
      userCourses.some((course: coursesListItem) => course._id === props.course._id)
    ) {
      addIcon = <img src= {leaveCourseIcon} onClick={LeaveCourse}/>;
    } else {
      addIcon = <img src= {joinCourseIcon} onClick={JoinCourse}/>;
    }
  }
  return (
    <div>
      <Link to = {`/course/${props.course._id}`}>
        <>{/* topic img */}</>
        <p>{props.course.name}</p>
        <p>{props.course.topic}</p>
        <p>{props.course.description}</p>
      </Link>
      {addIcon}
    </div>
  );
};
