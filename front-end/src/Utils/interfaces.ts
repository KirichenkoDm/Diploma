import { Roles, Topics } from "./enums";
import { SearchFormData } from "./formDataTypes";

export interface currentUser {
  email: string| null,
  name: string,
  surname: string | null,
  password: string | null,
  role: Roles,
}

export interface coursesListItem {
  name: string,
  topic: Topics,
  description: string,
}

export interface homeCoursesList {
  searchData: SearchFormData,
  coursesList: coursesListItem[],
}
