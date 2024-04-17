import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from 'src/Controllers/user.controller';
import { userSchema } from 'src/Schemas/user.schema';
import { UserService } from 'src/Sevices/user.service';
import { CourseModule } from './course.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: userSchema }]),
    CourseModule,
  ],
  exports: [UserService],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
