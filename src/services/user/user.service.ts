import { CreateUserInput } from '@interface/user';
import { userRepository } from '@models/user/user.repository';
import { UserType } from '@schema/user/user.schema';

class UserService {
  async createUser(input: CreateUserInput): Promise<UserType> {
    return userRepository.createUser(input);
  }
}

export const userService = new UserService();
