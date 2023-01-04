import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Roles } from './Roles';

@Schema()
export class user {
    @Prop()
    email: string;

    @Prop()
    password: string;

    @Prop()
    salt: string;

    @Prop()
    name: string;

    @Prop()
    surname: string;

    @Prop() 
    role: Roles;

    @Prop()
    courses: Array<string>;
}

export const userSchema = SchemaFactory.createForClass(user);