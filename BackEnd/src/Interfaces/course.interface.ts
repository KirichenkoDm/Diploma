import { Document } from 'mongoose';
import { Topics } from '../Tools/enums';


export interface ICourse /*extends Document*/ {
    hidden:     boolean;
    name:       string;
    topic:      Topics;
    description:string;
    matherials: string;
}