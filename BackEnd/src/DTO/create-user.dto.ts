import { IsNotEmpty, IsString, MaxLength,  } from "class-validator";
import { Roles } from "../Tools/enums";


export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    readonly email: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsString()
    @IsNotEmpty()
    salt: string;

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