import { Topics } from './enums';
export interface AgregateCourseObject {
  page: number;
  topic?: Topics;
  searchQuery?: string;
}
