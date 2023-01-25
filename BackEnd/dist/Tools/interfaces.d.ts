import { Topics } from "./enums";
export interface AgregateCourseObject {
    page: number;
    topics?: Array<Topics>;
    searchQuery?: string;
}
