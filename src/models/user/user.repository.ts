import { CreateUserInput } from '@interface/user';
import { UserType } from '@schema/user/user.schema';
import { getModelForClass, ReturnModelType } from '@typegoose/typegoose';

class UserRepository {
  private UserModel: ReturnModelType<typeof UserType>;

  getUserModel(): void {
    if (!this.UserModel) {
      this.UserModel = getModelForClass(UserType, { schemaOptions: { collection: 'users' } });
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
}

export const userRepository = new UserRepository();
