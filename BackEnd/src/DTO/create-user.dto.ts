import { IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { Roles } from '../Tools/enums';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(30)
  name: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(30)
  surname: string;

  @IsNotEmpty()
  role: Roles;

  courses: Array<string>;
}
