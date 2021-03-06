import { CreateUserInput, UpdateUserInput } from '@interface/user';
import { AllUsersInput, UserFilters } from '@interface/user/input/allUsers.input';
import { AllUsersPayload } from '@interface/user/payload';
import { userRepository } from '@models/user/user.repository';
import { UserType } from '@schema/user/user.schema';

class UserService {
  async createUser(input: CreateUserInput): Promise<UserType> {
    return userRepository.createUser(input);
  }

  async getUsers(input: AllUsersInput): Promise<AllUsersPayload> {
    const users = await userRepository.getAllUsers(input);
    return { users };
  }

  async updateUser(filters: UserFilters, toUpdateFields: UpdateUserInput): Promise<UserType> {
    return userRepository.updateUser(filters, toUpdateFields);
  }
}

export const userService = new UserService();
