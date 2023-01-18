import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"

@Schema()
export class matherial {
    @Prop()
    materials: Array<string>;

    @Prop()
    relatedCourse: string;
}

export const matherialScheema = SchemaFactory.createForClass(matherial);