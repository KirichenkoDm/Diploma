import { Document } from 'mongoose';

export interface IMaterial extends Document {
    readonly materials: Array<string>;
    readonly relatedCourse: string;
}