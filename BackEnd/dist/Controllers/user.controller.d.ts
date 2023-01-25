import { CreateUserDto } from '../DTO/create-user.dto';
import { UpdateUserDto } from '../DTO/update-user.dto';
import { Roles } from '../Tools/enums';
import { UserService } from '../Sevices/user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    createUser(response: any, createUserDto: CreateUserDto): Promise<any>;
    updateUser(response: any, userId: string, updateUserDto: UpdateUserDto): Promise<any>;
    signIn(response: any, email: string, password: string): Promise<any>;
    getUser(response: any, userId: string): Promise<any>;
    getAllCourseUsers(response: any, courseId: string, role: Roles): Promise<any>;
    deleteUser(response: any, userId: string): Promise<any>;
}
