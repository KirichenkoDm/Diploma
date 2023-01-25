import { CourseService } from '../Sevices/course.service';
import { CreateCourseDto } from '../DTO/create-course.dto';
import { UpdateCourseDto } from '../DTO/update-corse.dto';
import { AgregateCourseObject } from 'src/Tools/interfaces';
export declare class CourseController {
    private readonly courseService;
    constructor(courseService: CourseService);
    createCourse(response: any, createCourseDto: CreateCourseDto): Promise<any>;
    updateCourse(response: any, courseId: string, updateCourseDto: UpdateCourseDto): Promise<any>;
    getCourseById(response: any, courseId: string): Promise<any>;
    getCoursesByQuery(response: any, agregateObject: AgregateCourseObject): Promise<any>;
    deleteCourse(response: any, courseId: string): Promise<any>;
}
