import { Topics } from "../topics";
export declare class CreateCourseDto {
    readonly hidden: boolean;
    readonly name: string;
    readonly topic: Topics;
    readonly description: string;
    readonly matherials: string;
}
