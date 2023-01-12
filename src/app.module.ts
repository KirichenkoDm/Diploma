import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { userSchema} from './Users/user.schema'
import { courseSchema } from './Courses/course.schema'
import { matherialScheema } from './Materials/material.schema'
import { UserController } from './Users/user.controller';
import { CourseController } from './Courses/course.controller';
import { MaterialController } from './Materials/material.controller';
import { UserService } from './Users/user.service';
import { CourseService } from './Courses/course.service';
import { MaterialService } from './Materials/material.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/', { dbName: 'courseProjectDb' }),
    MongooseModule.forFeature([
      { name: 'User', schema: userSchema },
      { name: 'Course', schema: courseSchema },
      { name: 'Material', schema: matherialScheema }
    ])
  ],
  controllers: [AppController, UserController, CourseController, MaterialController],
  providers: [AppService, UserService, CourseService, MaterialService],
})
export class AppModule {}
