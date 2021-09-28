import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, idade, endereco }: ICreateUserDTO): User {
    const user = new User();

    Object.assign(user, {
      name,
      idade,
      endereco,
    });

    this.users.push(user);

    return user;
  }

  findById(id: string): User | undefined {
    const user = this.users.find((user) => user.id === id);
    return user;
  }

  delete(id: string): User | undefined {
    const userIndex = this.users.findIndex((user) => user.id === id);
    const userDeleted = this.users.find((user) => user.id === id);

    this.users.splice(userIndex, 1);

    return userDeleted;
  }

  update({ id, name, idade, endereco }): User {
    const userIndex = this.users.findIndex((user) => user.id === id);
    const user = this.users.find((user) => user.id === id);

    const updated_at = new Date();

    Object.assign(this.users[userIndex], {
      name,
      idade,
      endereco,
      updated_at,
    });

    return user;
  }

  list(): User[] {
    return this.users;
  }
}

export { UsersRepository };
