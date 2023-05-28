import { AgregateCourseObject } from './interfaces';
import * as bcrypt from 'bcrypt';
const saltRounds = 10;

export async function HashPassword(password: string): Promise<string> {
  const salt = await bcrypt.genSalt(saltRounds);
  return await bcrypt.hash(password, salt);
}

export async function MakeQuerryAgregateCourse(
  agregateObject: AgregateCourseObject,
) {
  let query = {};
  if (agregateObject.topic && agregateObject.topic.length != 0) {
    query = { $regex: agregateObject.topic };
  }

  if (agregateObject.searchQuery && agregateObject.searchQuery.length != 0) {
    query = {
      ...query,
      $or: [
        { name: { $in: new RegExp(agregateObject.searchQuery, 'i') } },
        { description: { $in: new RegExp(agregateObject.searchQuery, 'i') } },
      ],
    };
  }
  return query;
}
