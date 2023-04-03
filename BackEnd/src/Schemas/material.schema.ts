import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class matherial {
  @Prop([String])
  materials: string[];
}

export const matherialScheema = SchemaFactory.createForClass(matherial);
