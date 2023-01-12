"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const user_schema_1 = require("./Users/user.schema");
const course_schema_1 = require("./Courses/course.schema");
const material_schema_1 = require("./Materials/material.schema");
const user_controller_1 = require("./Users/user.controller");
const course_controller_1 = require("./Courses/course.controller");
const material_controller_1 = require("./Materials/material.controller");
const user_service_1 = require("./Users/user.service");
const course_service_1 = require("./Courses/course.service");
const material_service_1 = require("./Materials/material.service");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRoot('mongodb://127.0.0.1:27017/', { dbName: 'courseProjectDb' }),
            mongoose_1.MongooseModule.forFeature([
                { name: 'User', schema: user_schema_1.userSchema },
                { name: 'Course', schema: course_schema_1.courseSchema },
                { name: 'Material', schema: material_schema_1.matherialScheema }
            ])
        ],
        controllers: [app_controller_1.AppController, user_controller_1.UserController, course_controller_1.CourseController, material_controller_1.MaterialController],
        providers: [app_service_1.AppService, user_service_1.UserService, course_service_1.CourseService, material_service_1.MaterialService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map