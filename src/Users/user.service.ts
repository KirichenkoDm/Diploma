import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './DTO/create-user.dto';
import { UpdateUserDto } from './DTO/update-user.dto';
import { Roles } from './Roles';
import { IUser } from './user.interface';
const bcrypt = require('bcrypt');

async function HashPassword(newUser: CreateUserDto): Promise<CreateUserDto> {
    return bcrypt.genSalt(10)
    .then(salt => {
        newUser.salt = salt;
        return bcrypt.hash(newUser.password, salt) //10 times
    })
    .then(hash => {
        newUser.password = hash;
        return newUser;
    })
}

@Injectable()
export class UserService {

    constructor(@InjectModel('User') private userModel:Model<IUser>) {} 

    async createUser (createUserDto: CreateUserDto): Promise<IUser> {
        createUserDto = await HashPassword(createUserDto);
        const newUser = await new this.userModel(createUserDto);
        //
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

    async getAllCourseUsers(courseId: string, userRole: Roles): Promise<IUser[]> {
        const studentsData = await this.userModel.find({courses: { "$in" : [courseId] }, role: userRole});

        if(!studentsData || studentsData.length == 0) {
            throw new NotFoundException(`Course "#${courseId}" not found or has no #${userRole}"`);
        }
        return studentsData;
    }
    
}
