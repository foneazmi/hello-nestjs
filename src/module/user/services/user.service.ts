import { Injectable } from '@nestjs/common';
import { User } from '../interfaces/user.interface';

@Injectable()
export class UserService {
  private readonly users: User[] = [];

  create(user: User): User {
    const rawUser = { id: this.users.length, ...user };
    this.users.push(rawUser);
    return rawUser;
  }

  findOne(id: number): User {
    return this.users.find((user) => user.id === id);
  }

  findAll(): User[] {
    return this.users;
  }
}
