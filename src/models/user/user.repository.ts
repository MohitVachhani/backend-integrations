import { CreateUserInput, UpdateUserInput } from '@interface/user';
import { AllUsersInput, UserFilters } from '@interface/user/input/allUsers.input';
import { buildUserFilterQuery } from '@models/user/utils/buildFilterQuery';
import { buildUserUpdateQuery } from '@models/user/utils/buildUpdateQuery';
import { UserType } from '@schema/user/user.schema';
import { getModelForClass, ReturnModelType } from '@typegoose/typegoose';

class UserRepository {
  private UserModel: ReturnModelType<typeof UserType>;

  getModel(): void {
    if (!this.UserModel) {
      this.UserModel = getModelForClass(UserType, { schemaOptions: { collection: 'users', timestamps: true } });
    }
  }

  async createUser(input: CreateUserInput): Promise<UserType> {
    this.getModel();
    const user = new this.UserModel({
      ...input,
    });
    const createdUser = await this.UserModel.create(user);
    return createdUser;
  }

  async updateUser(filters: UserFilters, toUpdateFields: UpdateUserInput): Promise<UserType | null> {
    this.getModel();

    const filterQuery = buildUserFilterQuery(filters);
    const updateQuery = buildUserUpdateQuery(toUpdateFields);

    const user = await this.UserModel.findOneAndUpdate(filterQuery, updateQuery);
    return user;
  }

  async getAllUsers(input: AllUsersInput): Promise<Array<UserType>> {
    this.getModel();

    const { filters, projection } = input;
    const filterQuery = buildUserFilterQuery(filters);

    const users = await this.UserModel.find(filterQuery, projection);

    return users;
  }
}

export const userRepository = new UserRepository();
