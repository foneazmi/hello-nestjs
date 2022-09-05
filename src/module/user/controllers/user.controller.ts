import {
  Controller,
  Get,
  Post,
  Res,
  Body,
  Query,
  HttpStatus,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { UserService } from '../services';
import { Response } from 'express';
import { ApiTags } from '@nestjs/swagger';
import { UserDto, UserQuery } from '../dto/user.dto';

@ApiTags('User')
@Controller('/user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  create(@Body() createUserDto: UserDto, @Res() res: Response) {
    const user = this.userService.create(createUserDto);
    return res.status(HttpStatus.OK).json({
      message: `create user success`,
      data: user,
    });
  }

  @Get()
  findAll(@Query() query: UserQuery, @Res() res: Response) {
    const users = this.userService.findAll();
    return res.status(HttpStatus.OK).json({
      message: `get users success`,
      data: users,
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Res() res: Response) {
    console.log('id', id);
    const user = this.userService.findOne(Number(id));
    return res.status(HttpStatus.OK).json({
      message: `get user success`,
      data: user,
    });
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UserDto) {
    return `This action updates a #${id} cat ${updateUserDto}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }
}
