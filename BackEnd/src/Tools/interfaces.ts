import { Topics } from './enums';
export interface AgregateCourseObject {
  page: number;
  topic: Topics | string | null;
  searchQuery: string | null;
}
