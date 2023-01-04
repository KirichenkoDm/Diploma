import { IsArray, IsNotEmpty, IsString, ArrayUnique } from "class-validator";

export class CreateMaterialDto {
    @IsArray()
    @ArrayUnique()
    @IsNotEmpty()
    readonly matherials: Array<string>;

    @IsString()
    @IsNotEmpty()
    readonly relatedCourse: string;
}