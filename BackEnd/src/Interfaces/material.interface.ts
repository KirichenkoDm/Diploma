import { Document } from 'mongoose';

export interface IMaterial extends Document {
  materials: Array<string>;
}
