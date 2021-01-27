import { EntityMongoProjections } from '@interface/entity';
import { UserType } from '@schema/user/user.schema';

export interface UserFilters {
  emailIds: Array<UserType['emailId']>;
}

export interface AllUsersInput {
  filters: UserFilters;
  projection: EntityMongoProjections<UserType>;
}
