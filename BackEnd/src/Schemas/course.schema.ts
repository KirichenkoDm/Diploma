import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Topics } from '../Tools/enums';

@Schema()
export class course {
  @Prop({
    type: Boolean,
    required: true,
  })
  hidden: boolean;

  @Prop({
    type: String,
    required: true,
    maxLength: 30,
  })
  name: string;

  @Prop({
    type: String,
    enum: Topics,
    required: true,
  })
  topic: string;

  @Prop({
    type: String,
    required: true,
  })
  description: string;

  @Prop({
    type: String,
    required: true,
    unique: true,
  })
  matherials: string;
}

export const courseSchema = SchemaFactory.createForClass(course);
