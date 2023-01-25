import { Roles } from "../Tools/enums";
export declare class CreateUserDto {
    email: string;
    password: string;
    salt: string;
    name: string;
    surname: string;
    role: Roles;
    courses: Array<string>;
}
