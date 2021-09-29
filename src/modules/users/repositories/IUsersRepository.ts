import { User } from "../model/User";

interface ICreateUserDTO {
  name: string;
  age: number;
  address: string;
}

interface IUsersRepository {
  create({ name, age, address }: ICreateUserDTO): User;
  findById(id: string): User | undefined;
  delete(id: string): User;
  update({ id, name, age, address }): User | undefined;
  list(): User[];
}

export { IUsersRepository, ICreateUserDTO };
