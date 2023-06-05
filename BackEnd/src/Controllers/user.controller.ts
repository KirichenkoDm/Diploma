import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
  Res,
} from '@nestjs/common';
import { CreateUserDto } from '../DTO/create-user.dto';
import { UpdateUserDto } from '../DTO/update-user.dto';
import { UserService } from '../Sevices/user.service';
import { Public } from '../Tools/decorators';
import { CourseService } from 'src/Sevices/course.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly courseService: CourseService,
  ) {}

  @Public()
  @Post('/signup')
  async createUser(@Res() response, @Body() createUserDto: CreateUserDto) {
    try {
      const newUser = await this.userService.createUser(createUserDto);
      //const existingUser = await this.userService.signIn(newUser.email);
      return response.status(HttpStatus.CREATED).json({
        message: 'User created succesfully',
        newUser,
      });
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'Error: Student not created',
        error: 'Bad Request',
      });
    }
  }

  @Public()
  @Get('/signin')
  async signIn(
    @Res() response,
    @Query() querry: { email: string; password: string },
  ) {
    try {
      const userData = await this.userService.signIn(
        querry.email,
        querry.password,
      );
      const courseData = await this.courseService.getCoursesByIds(
        userData.courses,
      );
      const existingUser = {
        email: userData.email,
        name: userData.name,
        surname: userData.surname,
        _id: userData._id,
        role: userData.role,
        courses: courseData,
      };
      //jwt somewhere here?
      return response.status(HttpStatus.OK).json({
        message: 'Correct data',
        existingUser,
      });
    } catch (error) {
      return response.status(error.status).json(error.response);
    }
  }

  @Put('/:id')
  async updateUser(
    @Res() response,
    @Param('id') userId: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    try {
      const userData = await this.userService.updateUser(userId, updateUserDto);
      const courseData = await this.courseService.getCoursesByIds(
        userData.courses,
      );
      const updatedUser = {
        email: userData.email,
        name: userData.name,
        surname: userData.surname,
        _id: userData._id,
        role: userData.role,
        courses: courseData,
      };
      return response.status(HttpStatus.OK).json({
        message: 'User updated succesfully ',
        updatedUser,
      });
    } catch (error) {
      return response.status(error.status).json(error.response);
    }
  }

  @Get('/:id')
  async getUser(@Res() response, @Param('id') userId: string) {
    try {
      const existingUser = await this.userService.getUser(userId);
      return response.status(HttpStatus.OK).json({
        message: 'User found succesfully',
        existingUser,
      });
    } catch (error) {
      return response.status(error.status).json(error.response);
    }
  }

  @Get(':uid/courses')
  async getAllUserCourses(@Res() response, @Param('uid') uid: string) {
    try {
      const coursesIDs = await this.userService.getAllUserCourses(uid);
      const courseData = await this.courseService.getCoursesByIds(coursesIDs);
      return response.status(HttpStatus.OK).json({
        message: 'Courses data found succesfully',
        courseData,
      });
    } catch (error) {
      return response.status(error.status).json(error.response);
    }
  }

  @Delete('/:id')
  async deleteUser(@Res() response, @Param('id') userId: string) {
    try {
      const deletedUser = await this.userService.deleteUser(userId);
      return response.status(HttpStatus.OK).json({
        message: 'Users deleted succesfully',
        deletedUser,
      });
    } catch (error) {
      return response.status(error.status).json(error.response);
    }
  }
}
