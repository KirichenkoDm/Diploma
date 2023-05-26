import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ICourse } from '../Interfaces/course.interface';
import { CreateCourseDto } from '../DTO/create-course.dto';
import { UpdateCourseDto } from '../DTO/update-corse.dto';
import { AgregateCourseObject } from '../Tools/interfaces';
import { MakeQuerryAgregateCourse } from 'src/Tools/utils';

@Injectable()
export class CourseService {
  constructor(@InjectModel('Course') private courseModel: Model<ICourse>) {}

  async createCourse(createCouseDto: CreateCourseDto): Promise<ICourse> {
    const newCourse = await new this.courseModel(createCouseDto);
    newCourse.save();
    return newCourse;
  }

  async updateCourse(
    id: string,
    updateCourseDto: UpdateCourseDto,
  ): Promise<ICourse> {
    const updatedCourse = await this.courseModel.findByIdAndUpdate(
      id,
      updateCourseDto,
    );

    if (!updatedCourse) {
      throw new NotFoundException(`Course "#${id}" not found`);
    }
    return updatedCourse;
  }

  async getCourseById(id: string): Promise<ICourse> {
    const existingCourse = await this.courseModel.findById(id);

    if (!existingCourse) {
      throw new NotFoundException(`Course "#${id}" not found`);
    }
    return existingCourse;
  }

  async getCoursesByQuery(
    agregateObject: AgregateCourseObject,
  ): Promise<ICourse[]> {
    const query = await MakeQuerryAgregateCourse(agregateObject);
    const courseData = await this.courseModel
      .find(query)
      .sort({ $natural: -1 })
      .skip((agregateObject.page - 1) * 3)
      .limit(3);
    if (!courseData || courseData.length == 0) {
      throw new NotFoundException('Courses which matches query not found');
    }
    return courseData;
  }

  async deleteCourse(id: string): Promise<ICourse> {
    const deletedCourse = await this.courseModel.findByIdAndDelete(id);

    if (!deletedCourse) {
      throw new NotFoundException(`Course "#${id}" not found`);
    }
    return deletedCourse;
  }
}
