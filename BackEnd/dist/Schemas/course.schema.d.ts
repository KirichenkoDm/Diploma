/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { Topics } from "../Tools/enums";
export declare class course {
    hidden: {
        type: boolean;
        required: true;
    };
    name: {
        type: string;
        required: true;
        maxLength: 30;
    };
    topic: {
        type: number;
        enum: Topics;
        required: true;
    };
    description: {
        type: string;
        required: true;
    };
    matherials: {
        type: string;
        required: true;
        unique: true;
    };
}
export declare const courseSchema: import("mongoose").Schema<course, import("mongoose").Model<course, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, course>;
