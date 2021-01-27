import { UserType } from '@schema/user/user.schema';

export interface AllUsersPayload {
  users: Array<UserType>;
}
