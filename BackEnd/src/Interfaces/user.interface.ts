import { Document } from 'mongoose';
import { Roles } from '../Tools/enums';

export interface IUser extends Document {
  email: string;
  password: string;
  salt: string;
  name: string;
  surname: string;
  role: Roles;
  courses: Array<string>;
}
