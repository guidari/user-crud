import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  id: string;
  name: string;
  age: number;
  address: string;
}

class UpdateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ id, name, age, address }: IRequest): User {
    const user = this.usersRepository.findById(id);

    if (!user) {
      throw new Error("User Not Found");
    }

    return this.usersRepository.update({ id, name, age, address });
  }
}

export { UpdateUserUseCase };
