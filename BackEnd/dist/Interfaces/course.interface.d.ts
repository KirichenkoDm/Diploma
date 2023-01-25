import { Topics } from '../Tools/enums';
export interface ICourse {
    hidden: boolean;
    name: string;
    topic: Topics;
    description: string;
    matherials: string;
}
