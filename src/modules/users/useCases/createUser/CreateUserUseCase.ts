import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  idade: number;
  endereco: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ name, idade, endereco }: IRequest): User {
    return this.usersRepository.create({ name, idade, endereco });
  }
}

export { CreateUserUseCase };
