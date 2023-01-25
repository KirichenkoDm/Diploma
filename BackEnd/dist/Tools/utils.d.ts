import { CreateUserDto } from "../DTO/create-user.dto";
import { UpdateUserDto } from "../DTO/update-user.dto";
import { AgregateCourseObject } from "./interfaces";
export declare function HashPassword(newUser: (CreateUserDto | UpdateUserDto)): Promise<CreateUserDto | UpdateUserDto>;
export declare function MakeQuerryAgregateCourse(agregateObject: AgregateCourseObject): Promise<{}>;
