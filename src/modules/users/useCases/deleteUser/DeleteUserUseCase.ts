import { User } from "modules/users/model/User";
import { IUsersRepository } from "modules/users/repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class DeleteUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const user = this.usersRepository.findById(user_id);

    if (!user) {
      throw new Error("User Not Found");
    }

    return this.usersRepository.delete(user_id);
  }
}

export { DeleteUserUseCase };
