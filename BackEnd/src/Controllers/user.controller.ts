import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { CreateUserDto } from '../DTO/create-user.dto';
import { UpdateUserDto } from '../DTO/update-user.dto';
import { Roles } from '../Tools/enums';
import { UserService } from '../Sevices/user.service';
import { Public } from '../Tools/decorators';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

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

  @Get('/signin')
  async signIn(
    @Res() response,
    @Param('email') email: string,
    @Param('password') password: string,
  ) {
    try {
      const existingUser = await this.userService.signIn(email, password);
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
      const updatedUser = await this.userService.updateUser(
        userId,
        updateUserDto,
      );
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

  @Get('/:course/:role')
  async getAllCourseUsers(
    @Res() response,
    @Param('id') courseId: string,
    @Param('role') role: Roles,
  ) {
    try {
      const userData = await this.userService.getAllCourseUsers(courseId, role);
      return response.status(HttpStatus.OK).json({
        message: 'Users data found succesfully',
        userData,
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
