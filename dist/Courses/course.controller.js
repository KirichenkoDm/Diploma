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
exports.CourseController = void 0;
const common_1 = require("@nestjs/common");
const course_service_1 = require("./course.service");
const create_course_dto_1 = require("./DTO/create-course.dto");
const update_corse_dto_1 = require("./DTO/update-corse.dto");
const topics_1 = require("./topics");
let CourseController = class CourseController {
    constructor(courseService) {
        this.courseService = courseService;
    }
    async createCourse(response, createCourseDto) {
        try {
            const newCourse = await this.courseService.createCourse(createCourseDto);
            return response.status(common_1.HttpStatus.CREATED).json({
                message: 'Course created succesfully',
                newCourse,
            });
        }
        catch (error) {
            return response.status(common_1.HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: 'Error: Course not created',
                error: 'Bed Request',
            });
        }
    }
    async updateCourse(response, courseId, updateCourseDto) {
        try {
            const updatedCourse = await this.courseService.updateCourse(courseId, updateCourseDto);
            return response.status(common_1.HttpStatus.OK).json({
                message: 'Course created succesfully',
                updatedCourse,
            });
        }
        catch (error) {
            return response.status(error.status).json(error.response);
        }
    }
    async getCourseById(response, courseId) {
        try {
            const existingCourse = await this.courseService.getCourseById(courseId);
            return response.status(common_1.HttpStatus.OK).json({
                message: 'Course found succesfully',
                existingCourse,
            });
        }
        catch (error) {
            return response.status(error.status).json(error.response);
        }
    }
    async getCoursesByTopic(response, courseTopic) {
        try {
            const existingCourse = await this.courseService.getCoursesByTopic(courseTopic);
            return response.status(common_1.HttpStatus.OK).json({
                message: 'All courses found succesfully',
                existingCourse,
            });
        }
        catch (error) {
            return response.status(error.status).json(error.response);
        }
    }
    async deleteCourse(response, courseId) {
        try {
            const deletedCourse = await this.courseService.deleteCourse(courseId);
            return response.status(common_1.HttpStatus.OK).json({
                message: 'Course deleted succesfully',
                deletedCourse,
            });
        }
        catch (error) {
            return response.status(error.status).json(error.response);
        }
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_course_dto_1.CreateCourseDto]),
    __metadata("design:returntype", Promise)
], CourseController.prototype, "createCourse", null);
__decorate([
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, update_corse_dto_1.UpdateCourseDto]),
    __metadata("design:returntype", Promise)
], CourseController.prototype, "updateCourse", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], CourseController.prototype, "getCourseById", null);
__decorate([
    (0, common_1.Get)('topic/:topic'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('topic')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], CourseController.prototype, "getCoursesByTopic", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], CourseController.prototype, "deleteCourse", null);
CourseController = __decorate([
    (0, common_1.Controller)('course'),
    __metadata("design:paramtypes", [course_service_1.CourseService])
], CourseController);
exports.CourseController = CourseController;
//# sourceMappingURL=course.controller.js.map