import { Document } from 'mongoose';
import { Topics } from './topics';


export interface ICourse extends Document {
    readonly hidden: boolean;
    readonly name: string;
    readonly topic: Topics;
    readonly description: string;
    readonly matherials: string;
}