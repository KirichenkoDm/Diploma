import { IsNotEmpty, IsString, MaxLength,  } from "class-validator";
import { Roles } from "../Roles";


export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    readonly email: string;

    @IsString()
    @IsNotEmpty()
    readonly password: string;

    @IsString()
    @IsNotEmpty()
    readonly salt: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(30)
    readonly name: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(30)
    readonly surname: string;

    @IsNotEmpty()
    readonly role: Roles;

    readonly courses: Array<string>;
}