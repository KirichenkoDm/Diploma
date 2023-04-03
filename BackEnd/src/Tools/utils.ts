import { CreateUserDto } from '../DTO/create-user.dto';
import { UpdateUserDto } from '../DTO/update-user.dto';
import { AgregateCourseObject } from './interfaces';
import bcrypt from 'bcrypt';
const saltRounds = 10;

export async function HashPassword(
  newUser: CreateUserDto | UpdateUserDto,
): Promise<CreateUserDto | UpdateUserDto> {
  newUser.salt = await bcrypt.genSalt(saltRounds);
  newUser.password = await bcrypt.hash(newUser.password, newUser.salt);
  return Promise.resolve(newUser);
}

export async function MakeQuerryAgregateCourse(
  agregateObject: AgregateCourseObject,
) {
  let query = {};
  if (agregateObject.topics && agregateObject.topics.length != 0) {
    query = { topic: { $all: agregateObject.topics } };
  }

  if (agregateObject.searchQuery && agregateObject.searchQuery.length != 0) {
    query = {
      query,
      ...{
        name: { $regex: agregateObject.searchQuery },
        description: { $regex: agregateObject.searchQuery },
      },
    };
  }

  return query;
}
