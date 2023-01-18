import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { CourseController } from "src/Controllers/course.controller";
import { courseSchema } from "src/Schemas/course.schema";
import { CourseService } from "src/Sevices/course.service";


@Module({
    imports: [
        MongooseModule.forFeature([
            { name: 'Course', schema: courseSchema }
        ])
    ],
    controllers: [
        CourseController
    ],
    providers: [
        CourseService
    ]
})
export class CourseModule {}