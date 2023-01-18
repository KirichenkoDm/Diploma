import { Roles } from "../Roles";
export declare class CreateUserDto {
    readonly email: string;
    readonly password: string;
    readonly salt: string;
    readonly name: string;
    readonly surname: string;
    readonly role: Roles;
    readonly courses: Array<string>;
}
