import { Injectable, NotFoundException } from '@nestjs/common';
import { ForbiddenException } from '@nestjs/common/exceptions';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './DTO/create-user.dto';
import { UpdateUserDto } from './DTO/update-user.dto';
import { Roles } from './Roles';
import { IUser } from './user.interface';
const bcrypt = require('bcrypt');
const saltRounds = 10;

async function HashPassword(newUser: CreateUserDto|UpdateUserDto): Promise<CreateUserDto> {
    return bcrypt.genSalt(saltRounds)
    .then(salt => {
        newUser.salt = salt;
        return bcrypt.hash(newUser.password, salt)
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
        if(updateUserDto.password) {
            updateUserDto = await HashPassword(updateUserDto);
        }
        const updatedUser = await this.userModel.findByIdAndUpdate(id, updateUserDto, {new: true});
        if (!updatedUser) {
            throw new NotFoundException(`User "#${id}" not found`);
        }
        return updatedUser;
    }

    async authoriseUser (email: string, password: string) {
        const existingUser = await this.userModel.find({email: email});

        if (!existingUser) {
            throw new NotFoundException(`User with email "${email}" not found`);
        }
        if("password" in existingUser && bcrypt.compare(password, existingUser.password)) {
            return existingUser;
        }
        throw new ForbiddenException('Wrong password');
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
