import { Controller, Get, HttpCode, Param, Res } from '@nestjs/common';
import { UserService } from '../services';
import { Response } from 'express';

import { ApiTags } from '@nestjs/swagger';

@ApiTags('User')
@Controller('/user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  @HttpCode(200)
  findAll(@Res() res: Response) {
    const users = this.userService.getUsers();
    return res.json({ users });
  }

  @Get(':username')
  @HttpCode(200)
  findOne(@Param() params: any, @Res() res: Response) {
    return res.json(params);
  }
}
