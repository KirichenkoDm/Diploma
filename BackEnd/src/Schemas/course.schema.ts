import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Topics } from "../Tools/enums";

@Schema()
export class course {
    @Prop()
    hidden: {
       type: boolean,
       required: true,
    };

    @Prop()
    name: {
        type: string
        required: true,
        maxLength: 30,
    };

    @Prop()
    topic: {
        type: number,
        enum: Topics,
        required: true,
    };

    @Prop()
    description: {
        type: string,
        required: true,
    };

    @Prop()
    matherials: {
        type: string,
        required: true,
        unique: true,
    };
}

export const courseSchema = SchemaFactory.createForClass(course);