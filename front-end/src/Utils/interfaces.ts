import { FetchStatus, Roles, Topics } from "./enums";
import { SearchFormData } from "./formDataTypes";

export interface currentUser {
  fetchStatus: FetchStatus,
  email: string| null,
  name: string,
  surname: string | null,
  _id: string | null,
  role: Roles,
  courses: coursesListItem[],
}

export interface coursesListItem {
  _id: string
  name: string,
  topic: Topics,
  description: string,
}

export interface homeCoursesList {
  fetchStatus: FetchStatus,
  error: string | null,
  searchData: SearchFormData,
  coursesList: coursesListItem[],
}

export interface updateUserData {
  name?: string
  surname?: string
  CourseId?: string
  act?: string
}
