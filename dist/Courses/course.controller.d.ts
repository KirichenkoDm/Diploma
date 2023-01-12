import { CourseService } from './course.service';
import { CreateCourseDto } from './DTO/create-course.dto';
import { UpdateCourseDto } from './DTO/update-corse.dto';
import { Topics } from './topics';
export declare class CourseController {
    private readonly courseService;
    constructor(courseService: CourseService);
    createCourse(response: any, createCourseDto: CreateCourseDto): Promise<any>;
    updateCourse(response: any, courseId: string, updateCourseDto: UpdateCourseDto): Promise<any>;
    getCourseById(response: any, courseId: string): Promise<any>;
    getCoursesByTopic(response: any, courseTopic: Topics): Promise<any>;
    deleteCourse(response: any, courseId: string): Promise<any>;
}
