import { UserType } from '@schema/user/user.schema';

export interface UpdateUserInput {
  firstName?: UserType['firstName'];
  lastName?: UserType['lastName'];
  profilePicture?: UserType['profilePicture'];
  lastLogin?: UserType['lastLogin'];
}
