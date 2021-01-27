import { CreateUserInput } from '@interface/user';
import { AllUsersInput } from '@interface/user/input/allUsers.input';
import { buildUserFilterQuery } from '@models/user/utils/buildFilterQuery';
import { UserType } from '@schema/user/user.schema';
import { getModelForClass, ReturnModelType } from '@typegoose/typegoose';

class UserRepository {
  private UserModel: ReturnModelType<typeof UserType>;

  getUserModel(): void {
    if (!this.UserModel) {
      this.UserModel = getModelForClass(UserType, { schemaOptions: { collection: 'users', timestamps: true } });
    }
  }

  async createUser(input: CreateUserInput): Promise<UserType> {
    this.getUserModel();
    const user = new this.UserModel({
      ...input,
    });
    const createdUser = await this.UserModel.create(user);
    return createdUser;
  }

  async getAllUsers(input: AllUsersInput): Promise<Array<UserType>> {
    this.getUserModel();

    const { filters, projection } = input;
    const filterQuery = buildUserFilterQuery(filters);

    const users = await this.UserModel.find(filterQuery, projection);

    return users;
  }
}

export const userRepository = new UserRepository();
