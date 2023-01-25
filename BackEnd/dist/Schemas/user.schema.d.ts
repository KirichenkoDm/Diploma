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
import { Roles } from '../Tools/enums';
export declare class user {
    email: {
        type: string;
        required: true;
        unique: true;
    };
    password: {
        type: string;
        required: true;
    };
    salt: {
        type: string;
        required: true;
    };
    name: {
        type: string;
        required: true;
        maxLength: 30;
    };
    surname: {
        type: string;
        required: true;
        maxLength: 30;
    };
    role: {
        type: number;
        enum: Roles;
        required: true;
    };
    courses: [
        {
            type: string;
        }
    ];
}
export declare const userSchema: import("mongoose").Schema<user, import("mongoose").Model<user, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, user>;
