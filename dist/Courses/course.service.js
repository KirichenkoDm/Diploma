"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let CourseService = class CourseService {
    constructor(courseModel) {
        this.courseModel = courseModel;
    }
    async createCourse(createCouseDto) {
        const newCourse = await new this.courseModel(createCouseDto);
        return newCourse.save();
    }
    async updateCourse(id, updateCourseDto) {
        const updatedCourse = await this.courseModel.findByIdAndUpdate(id, updateCourseDto);
        if (!updatedCourse) {
            throw new common_1.NotFoundException(`Course "#${id}" not found`);
        }
        return updatedCourse;
    }
    async getCourseById(id) {
        const existingCourse = await this.courseModel.findById(id);
        if (!existingCourse) {
            throw new common_1.NotFoundException(`Course "#${id}" not found`);
        }
        return existingCourse;
    }
    async getCoursesByTopic(getTopic) {
        const courseData = await this.courseModel.find({ topic: getTopic });
        if (!courseData || courseData.length == 0) {
            throw new common_1.NotFoundException(`Courses with #${getTopic} topic not found`);
        }
        return courseData;
    }
    async deleteCourse(id) {
        const deletedCourse = await this.courseModel.findByIdAndDelete(id);
        if (!deletedCourse) {
            throw new common_1.NotFoundException(`Course "#${id}" not found`);
        }
        return deletedCourse;
    }
};
CourseService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Course')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], CourseService);
exports.CourseService = CourseService;
//# sourceMappingURL=course.service.js.map