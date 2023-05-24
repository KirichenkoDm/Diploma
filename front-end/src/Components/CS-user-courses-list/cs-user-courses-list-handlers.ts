import { deleteCourse, leaveCourse } from "../../Store/currentUser.slice";

export const DeleteCourseHandler = (course: string, dispatch: any) => {
  dispatch(deleteCourse(course));
};

export const LeaveCourseHandler = (course: string, dispatch: any) => {
  dispatch(leaveCourse(course));
};
