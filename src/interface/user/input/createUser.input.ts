import { UserType } from '@schema/user/user.schema';

export interface CreateUserInput {
  firstName: UserType['firstName'];
  lastName: UserType['lastName'];
  signUpType: UserType['signUpType'];
}
