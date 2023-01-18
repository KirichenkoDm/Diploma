import { IsArray, IsNotEmpty, IsString, ArrayUnique } from "class-validator";

export class CreateMaterialDto {
    @IsArray()
    @ArrayUnique()
    @IsNotEmpty()
    readonly materials: Array<string>;

    @IsString()
    @IsNotEmpty()
    readonly relatedCourse: string;
}