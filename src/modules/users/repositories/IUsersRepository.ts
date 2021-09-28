import { User } from "../model/User";

interface ICreateUserDTO {
  name: string;
  idade: number;
  endereco: string;
}

interface IUsersRepository {
  create({ name, idade, endereco }: ICreateUserDTO): User;
  findById(id: string): User | undefined;
  delete(id: string): User;
  update({ id, name, idade, endereco }): User | undefined;
  list(): User[];
}

export { IUsersRepository, ICreateUserDTO };
