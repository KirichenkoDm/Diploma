import { IsArray, IsNotEmpty, IsString, ArrayUnique } from "class-validator";

export class CreateMaterialDto {
    @IsArray()
    @ArrayUnique()
    @IsNotEmpty()
    materials: Array<string>;
}