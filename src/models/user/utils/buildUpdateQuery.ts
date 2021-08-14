import { UpdateUserInput } from '@interface/user';
import { UserType } from '@schema/user/user.schema';
import { UpdateQuery } from 'mongoose';

export function buildUserUpdateQuery(toUpdateFields: UpdateUserInput): UpdateQuery<UserType> {
  const updateQuery = {};
  for (const key in toUpdateFields) {
    switch (key as keyof UpdateUserInput) {
      case 'firstName':
      case 'lastName':
      case 'lastLogin':
      case 'profilePicture': {
        if (toUpdateFields[key]) {
          updateQuery[key] = toUpdateFields[key];
        }
        break;
      }
    }
  }
  return { $set: updateQuery };
}
