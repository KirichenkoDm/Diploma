import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"

@Schema()
export class matherial {
    @Prop()
    materials: [{
        type: string,
    }];
}

export const matherialScheema = SchemaFactory.createForClass(matherial);