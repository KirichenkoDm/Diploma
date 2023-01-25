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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const utils_1 = require("../Tools/utils");
let UserService = class UserService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async createUser(createUserDto) {
        createUserDto = await (0, utils_1.HashPassword)(createUserDto);
        const newUser = await new this.userModel(createUserDto);
        return newUser.save();
    }
    async updateUser(id, updateUserDto) {
        if (updateUserDto.password) {
            updateUserDto = await (0, utils_1.HashPassword)(updateUserDto);
        }
        let addCoursesArray = {};
        let deleteCoursesArray = {};
        if (updateUserDto.addCourses && updateUserDto.addCourses.length != 0) {
            addCoursesArray = { $addToSet: { "courses": updateUserDto.addCourses } };
        }
        if (updateUserDto.deleteCourses && updateUserDto.addCourses.length != 0) {
            deleteCoursesArray = { $pull: { "courses": updateUserDto.deleteCourses } };
        }
        const updatedUser = await this.userModel.findByIdAndUpdate(id, {
            updateUserDto,
            addCoursesArray,
            deleteCoursesArray
        }, { new: true });
        if (!updatedUser) {
            throw new common_1.NotFoundException(`User "#${id}" not found`);
        }
        return updatedUser;
    }
    async signIn(email) {
        const existingUser = await this.userModel.findOne({ email: email });
        if (!existingUser) {
            throw new common_1.NotFoundException(`User with email "${email}" not found`);
        }
        return existingUser;
    }
    async getUser(id) {
        const existingUser = await this.userModel.findById(id);
        if (!existingUser) {
            throw new common_1.NotFoundException(`User "#${id}" not found`);
        }
        return existingUser;
    }
    async deleteUser(id) {
        const deletedUser = await this.userModel.findByIdAndDelete(id);
        if (!deletedUser) {
            throw new common_1.NotFoundException(`User "#${id}" not found`);
        }
        return deletedUser;
    }
    async getAllCourseUsers(courseId, userRole) {
        const studentsData = await this.userModel.find({ courses: { "$in": [courseId] }, role: userRole });
        if (!studentsData || studentsData.length == 0) {
            throw new common_1.NotFoundException(`Course "#${courseId}" not found or has no #${userRole}"`);
        }
        return studentsData;
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('User')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map