import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getUsers(): any[] {
    return [
      {
        username: 'Bill',
      },
      {
        username: 'Mark',
      },
      {
        username: 'Zuck',
      },
      {
        username: 'Nobody',
      },
    ];
  }

  getUser(username: string) {
    return { username };
  }
}
