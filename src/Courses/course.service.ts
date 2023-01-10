import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ICourse } from './course.interface';
import { CreateCourseDto } from './DTO/create-course.dto';
import { UpdateCourseDto } from './DTO/update-corse.dto';
import { Topics } from './topics';

@Injectable()
export class CourseService {
    constructor (@InjectModel('Course') private courseModel: Model<ICourse>) {}

    async createCourse (createCouseDto: CreateCourseDto): Promise<ICourse> {
        const newCourse = await new this.courseModel(createCouseDto); 
        return newCourse;
    }

    async updateCourse (id: string, updateCourseDto: UpdateCourseDto): Promise<ICourse> {
        const updatedCourse = await this.courseModel.findByIdAndUpdate(id, updateCourseDto);

        if (!updatedCourse) {
            throw new NotFoundException(`Course "#${id}" not found`);
        }
        return updatedCourse
    }

    async getCourseById (id: string): Promise<ICourse> {
        const existingCourse = await this.courseModel.findById(id);

        if (!existingCourse) {
            throw new NotFoundException(`Course "#${id}" not found`);
        }
        return existingCourse;
    }

    async getCoursesWithTopic (getTopic: Topics): Promise<ICourse[]> {
        const  courseData = await this.courseModel.find({topic: getTopic});

        if (!courseData || courseData.length == 0) {
            throw new NotFoundException(`Courses with #${getTopic} topic not found`);
        }
        return courseData;
    }

    async deleteCourse (id: string): Promise<ICourse> {
        const deletedCourse = await this.courseModel.findByIdAndDelete(id);

        if(!deletedCourse) {
            throw new NotFoundException(`Course "#${id}" not found`);
        }
        return deletedCourse;
    }
}