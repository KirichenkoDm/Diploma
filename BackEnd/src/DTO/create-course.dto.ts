import { IsNotEmpty, IsBoolean, IsString, MaxLength } from 'class-validator';
import { Topics } from '../Tools/enums';

export class CreateCourseDto {
  @IsBoolean()
  @IsNotEmpty()
  hidden: boolean;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  topic: Topics;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  matherials: string;
}
