import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './DTO/create-user.dto';
import { UpdateUserDto } from './DTO/update-user.dto';
import { Roles } from './Roles';
import { IUser } from './user.interface';

@Injectable()
export class UserService {
    constructor(@InjectModel('User') private userModel:Model<IUser>) {} 

    async createUser (createUserDto: CreateUserDto): Promise<IUser> {
        const newUser = await new this.userModel(createUserDto);
        return newUser.save();
    }

    async updateUser (id: string, updateUserDto: UpdateUserDto): Promise<IUser> {
        const updatedUser = await this.userModel.findByIdAndUpdate(id, updateUserDto, {new: true});
        if (!updatedUser) {
            throw new NotFoundException(`User "#${id}" not found`);
        }
        return updatedUser;
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

    async getAllCourseUsers(courseId: string, role: Roles): Promise<IUser[]> {
        const studentsData = await this.userModel.find() //courses array contains courseId and role

        if(!studentsData || studentsData.length == 0) {
            throw new NotFoundException(`Course "#${courseId} not found or has no #${role}"`);
        }
        return studentsData;
    }
    
}
