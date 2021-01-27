import { UserFilters } from '@interface/user/input/allUsers.input';
import { UserType } from '@schema/user/user.schema';
import { FilterQuery } from 'mongoose';

export function buildUserFilterQuery(userFilters: UserFilters): FilterQuery<UserType> {
  const query: FilterQuery<UserType> = {};
  for (const key in userFilters) {
    switch (key as keyof UserFilters) {
      case 'emailIds': {
        const { emailIds } = userFilters;
        query.emailId = { $in: emailIds };
        break;
      }
      default: {
        console.log('no such key required');
        break;
      }
    }
  }
  return query;
}
