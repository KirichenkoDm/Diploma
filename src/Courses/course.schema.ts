import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Topics } from "./topics";

@Schema()
export class course {
    @Prop()
    hidden: boolean;

    @Prop()
    name: string;

    @Prop()
    topic: Topics;

    @Prop()
    description: string;

    @Prop()
    matherials: string;
}

export const courseSchema = SchemaFactory.createForClass(course);