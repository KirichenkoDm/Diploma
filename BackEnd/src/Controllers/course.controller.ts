import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { CourseService } from '../Sevices/course.service';
import { CreateCourseDto } from '../DTO/create-course.dto';
import { UpdateCourseDto } from '../DTO/update-corse.dto';
import { Topics } from '../Tools/enums';

@Controller('course') 
export class CourseController {
    constructor(private readonly courseService: CourseService) {}

    @Post()
    async createCourse (
        @Res() response,
        @Body() createCourseDto: CreateCourseDto,
    ) {
        try {
            const newCourse = await this.courseService.createCourse(createCourseDto);
            return response.status(HttpStatus.CREATED).json({
                message: 'Course created succesfully',
                newCourse,
            });
        } catch (error) {
            return response.status(HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: 'Error: Course not created',
                error: 'Bed Request',
            });
        }
    }

    @Put('/:id')
    async updateCourse (
        @Res() response,
        @Param('id') courseId: string,
        @Body() updateCourseDto: UpdateCourseDto,
    ) {
        try {
            const updatedCourse = await this.courseService.updateCourse(courseId, updateCourseDto);
            return response.status(HttpStatus.OK).json({
                message: 'Course created succesfully',
                updatedCourse,
            });
        } catch (error) {
            return response.status(error.status).json(error.response);
        }
    }

    @Get('/:id')
    async getCourseById (
        @Res() response,
        @Param('id') courseId: string,
    ) {
        try {
            const existingCourse = await this.courseService.getCourseById(courseId);
            return response.status(HttpStatus.OK).json({
                message: 'Course found succesfully',
                existingCourse,
            });
        } catch (error) {
            return response.status(error.status).json(error.response);
        }
    }

    @Get('topic/:topic')
    async getCoursesByTopic (
        @Res() response,
        @Param('topic') courseTopic: Topics,
    ) {
        try {
            const existingCourse = await this.courseService.getCoursesByTopic(courseTopic);
            return response.status(HttpStatus.OK).json({
                message: 'All courses found succesfully',
                existingCourse,
            });
        } catch (error) {
            return response.status(error.status).json(error.response);
        }
    }

    @Delete('/:id')
    async deleteCourse (
        @Res() response,
        @Param('id') courseId: string,
    ) {
        try {
            const deletedCourse = await this.courseService.deleteCourse(courseId);
            return response.status(HttpStatus.OK).json({
                message: 'Course deleted succesfully',
                deletedCourse,
            });
        } catch (error) {
            return response.status(error.status).json(error.response);
        }
    }
}