import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Roles } from '../Tools/enums';
//const bcrypt = require('bcrypt');

@Schema()
export class user {
  @Prop({
    type: String,
    required: true,
    unique: true,
  })
  email: string;

  @Prop({
    type: String,
    required: true,
  })
  password: string;

  @Prop({
    type: String,
    required: true,
    maxLength: 30,
  })
  name: string;

  @Prop({
    type: String,
    required: true,
    maxLength: 30,
  })
  surname: string;

  @Prop({
    enum: Roles,
    required: true,
  })
  role: Roles;

  @Prop([String])
  courses: string[];
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
