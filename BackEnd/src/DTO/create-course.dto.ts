import { IsNotEmpty, IsBoolean, IsString, MaxLength } from "class-validator";
import { Topics } from "../Tools/enums";

export class CreateCourseDto {
    @IsBoolean()
    @IsNotEmpty()
    readonly hidden: boolean;

    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly name: string;

    @IsNotEmpty()
    readonly topic: Topics;

    @IsString()
    @IsNotEmpty()
    readonly description: string;

    @IsString()
    @IsNotEmpty()
    readonly matherials: string;
}