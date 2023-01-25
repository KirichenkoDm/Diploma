import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Roles } from '../Tools/enums';
//const bcrypt = require('bcrypt');

@Schema()
export class user {
    @Prop()
    email: {
        type: string,
        required: true,
        unique: true,
    };

    @Prop()
    password: {
        type: string,
        required: true,
    };

    @Prop()
    salt: {
        type: string,
        required: true,
    };

    @Prop()
    name: {
        type: string,
        required: true,
        maxLength: 30,
    };

    @Prop()
    surname: {
        type: string,
        required: true,
        maxLength: 30,
    };

    @Prop() 
    role: {
        type: number,
        enum: Roles,
        required: true,
    };

    @Prop()
    courses: [{
        type: string,

    }];
}

export const userSchema = SchemaFactory.createForClass(user);

/*
userSchema.pre(
    'save',
    async function (next) {
        this.salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, this.salt);
        next();
    }
); */