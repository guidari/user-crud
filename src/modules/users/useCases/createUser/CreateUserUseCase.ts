import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  age: number;
  address: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ name, age, address }: IRequest): User {
    return this.usersRepository.create({ name, age, address });
  }
}

export { CreateUserUseCase };
