import { Model } from 'mongoose';
import { ICourse } from './course.interface';
import { CreateCourseDto } from './DTO/create-course.dto';
import { UpdateCourseDto } from './DTO/update-corse.dto';
import { Topics } from './topics';
export declare class CourseService {
    private courseModel;
    constructor(courseModel: Model<ICourse>);
    createCourse(createCouseDto: CreateCourseDto): Promise<ICourse>;
    updateCourse(id: string, updateCourseDto: UpdateCourseDto): Promise<ICourse>;
    getCourseById(id: string): Promise<ICourse>;
    getCoursesByTopic(getTopic: Topics): Promise<ICourse[]>;
    deleteCourse(id: string): Promise<ICourse>;
}
