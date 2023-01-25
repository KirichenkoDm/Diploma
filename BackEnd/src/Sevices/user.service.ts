import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from '../DTO/create-user.dto';
import { UpdateUserDto } from '../DTO/update-user.dto';
import { Roles } from '../Tools/enums';
import { IUser } from '../Interfaces/user.interface';
import { HashPassword } from 'src/Tools/utils';


@Injectable()
export class UserService {

    constructor(@InjectModel('User') private userModel:Model<IUser>) {} 

    async createUser (createUserDto: CreateUserDto): Promise<IUser> {
        createUserDto = await HashPassword(createUserDto) as CreateUserDto;
        const newUser = await new this.userModel(createUserDto);
        return newUser.save();
    }

    async updateUser (id: string, updateUserDto: UpdateUserDto): Promise<IUser> {
        if(updateUserDto.password) {
            updateUserDto = await HashPassword(updateUserDto) as UpdateUserDto;
        }

        let addCoursesArray = {};
        let deleteCoursesArray = {};
        if (updateUserDto.addCourses && updateUserDto.addCourses.length != 0) {
            addCoursesArray = { $addToSet: { "courses" : updateUserDto.addCourses }};
        }
        if(updateUserDto.deleteCourses && updateUserDto.addCourses.length != 0) {
            deleteCoursesArray = { $pull: { "courses": updateUserDto.deleteCourses }}
        }

        const updatedUser = await this.userModel.findByIdAndUpdate(
            id,
            {
                updateUserDto,
                addCoursesArray,
                deleteCoursesArray
            },
            {new: true}
        );
        if (!updatedUser) {
            throw new NotFoundException(`User "#${id}" not found`);
        }
        return updatedUser;
    }

    async signIn (email: string): Promise<IUser> {
        const existingUser = await this.userModel.findOne({email: email});

        if (!existingUser) {
            throw new NotFoundException(`User with email "${email}" not found`);
        }
        return existingUser;
    }

    async getUser (id: string): Promise<IUser> {
        const existingUser = await this.userModel.findById(id);

        if (!existingUser) {
            throw new NotFoundException(`User "#${id}" not found`);
        }
        return existingUser;
    }

    async deleteUser (id:string) : Promise<IUser> {
        const deletedUser = await this.userModel.findByIdAndDelete(id);

        if (!deletedUser) {
            throw new NotFoundException(`User "#${id}" not found`);
        }
        return deletedUser;
    }

    async getAllCourseUsers(courseId: string, userRole: Roles): Promise<IUser[]> {
        const studentsData = await this.userModel.find({courses: { "$in" : [courseId] }, role: userRole});
        
        if(!studentsData || studentsData.length == 0) {
            throw new NotFoundException(`Course "#${courseId}" not found or has no #${userRole}"`);
        }
        return studentsData;
    }
    
}
