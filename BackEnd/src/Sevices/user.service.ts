import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from '../DTO/create-user.dto';
import { UpdateUserDto } from '../DTO/update-user.dto';
import { Roles } from '../Tools/enums';
import { IUser } from '../Interfaces/user.interface';
import { HashPassword } from 'src/Tools/utils';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private userModel: Model<IUser>) {}

  async createUser(createUserDto: CreateUserDto): Promise<IUser> {
    createUserDto.password = await HashPassword(createUserDto.password);
    const newUser = await new this.userModel(createUserDto);

    newUser.save();
    const responseUser = JSON.parse(JSON.stringify(newUser));
    responseUser.password = undefined;
    return responseUser;
  }

  async updateUser(id: string, updateUserDto: UpdateUserDto): Promise<IUser> {
    // if (updateUserDto.password) {
    //   updateUserDto.password = await HashPassword(updateUserDto.password);
    // }

    let querry = {};

    if (updateUserDto.act === 'join') {
      querry = { $addToSet: { courses: updateUserDto.CourseId } };
    } else {
      querry = { $pull: { courses: updateUserDto.CourseId } };
    }

    const updatedUser = await this.userModel.findByIdAndUpdate(id, querry, {
      new: true,
    });
    if (!updatedUser) {
      throw new NotFoundException(`User "#${id}" not found`);
    }
    return updatedUser;
  }

  async signIn(email: string, password: string): Promise<IUser> {
    const existingUser = await this.userModel.findOne({ email: email });

    if (!existingUser) {
      throw new NotFoundException(`User with email "${email}" not found`);
    } else if (!bcrypt.compare(password, existingUser.password)) {
      throw new ForbiddenException('Wrong Password');
    } else return existingUser;
  }

  async getUser(id: string): Promise<IUser> {
    const existingUser = await this.userModel.findById(id);

    if (!existingUser) {
      throw new NotFoundException(`User "#${id}" not found`);
    }
    return existingUser;
  }

  async deleteUser(id: string): Promise<IUser> {
    const deletedUser = await this.userModel.findByIdAndDelete(id);

    if (!deletedUser) {
      throw new NotFoundException(`User "#${id}" not found`);
    }
    return deletedUser;
  }

  async getAllCourseUsers(courseId: string, userRole: Roles): Promise<IUser[]> {
    const studentsData = await this.userModel.find({
      courses: { $in: [courseId] },
      role: userRole,
    });

    if (!studentsData || studentsData.length == 0) {
      throw new NotFoundException(
        `Course "#${courseId}" not found or has no #${userRole}"`,
      );
    }
    return studentsData;
  }

  async getAllUserCourses(userid: string): Promise<string[]> {
    const coursesData = await this.userModel.findById(userid);
    if (!coursesData) {
      throw new NotFoundException(`User "#${userid}" not found`);
    }
    return coursesData.courses;
  }
}
