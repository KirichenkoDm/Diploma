import { fetchUpdateUser } from "../../Store/currentUser.slice";

export const JoinCourseHandler = (dispatch: any, id: string) => {
  dispatch(fetchUpdateUser({ CourseId: id, act: "join" }));
};

export const LeaveCourseHandler = (dispatch: any, id: string) => {
  dispatch(fetchUpdateUser({ CourseId: id, act: "leave" }));
};
