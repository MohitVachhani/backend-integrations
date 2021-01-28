import { UserType } from '@schema/user/user.schema';

export interface CreateUserInput {
  firstName: UserType['firstName'];
  lastName: UserType['lastName'];
  signUpType: UserType['signUpType'];
  profilePicture: UserType['profilePicture'];
  emailId: UserType['emailId'];
  createdById: UserType['createdById'];
  lastLogin?: UserType['lastLogin'];
}
