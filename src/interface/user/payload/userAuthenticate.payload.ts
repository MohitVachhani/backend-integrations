import { AuthTypeEnum } from '@enums/user';
import { UserType } from '@schema/user/user.schema';

export interface UserAuthenticatePayload {
  user: UserType;
  success: boolean;
  errorCode?: string;
  authType: AuthTypeEnum;
}
