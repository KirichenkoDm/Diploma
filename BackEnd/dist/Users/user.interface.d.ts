import { Document } from 'mongoose';
import { Roles } from './Roles';
export interface IUser extends Document {
    readonly email: string;
    readonly password: string;
    readonly salt: string;
    readonly name: string;
    readonly surname: string;
    readonly role: Roles;
    readonly courses: Array<string>;
}
