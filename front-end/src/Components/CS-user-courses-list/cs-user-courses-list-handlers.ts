import { fetchUpdateUser } from "../../Store/currentUser.slice";

export const DeleteCourseHandler = (id: string, dispatch: any) => {
  dispatch(fetchUpdateUser({ CourseId: id, act: "join" }));
};

export const LeaveCourseHandler = (id: string, dispatch: any) => {
  dispatch(fetchUpdateUser({ CourseId: id, act: "leave" }));
};
