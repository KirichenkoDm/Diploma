import { Document } from 'mongoose';
import { Topics } from '../Tools/enums';


export interface ICourse extends Document {
    readonly hidden: boolean;
    readonly name: string;
    readonly topic: Topics;
    readonly description: string;
    readonly matherials: string;
}