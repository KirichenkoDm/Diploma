import { Model } from 'mongoose';
import { CreateUserDto } from './DTO/create-user.dto';
import { UpdateUserDto } from './DTO/update-user.dto';
import { Roles } from './Roles';
import { IUser } from './user.interface';
export declare class UserService {
    private userModel;
    constructor(userModel: Model<IUser>);
    createUser(createUserDto: CreateUserDto): Promise<IUser>;
    updateUser(id: string, updateUserDto: UpdateUserDto): Promise<IUser>;
    getUser(id: string): Promise<IUser>;
    deleteUser(id: string): Promise<IUser>;
    getAllCourseUsers(courseId: string, userRole: Roles): Promise<IUser[]>;
}
