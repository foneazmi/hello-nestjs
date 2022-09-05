import { Controller, Get } from '@nestjs/common';
import { HelloService } from '../services';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Hello')
@Controller()
export class HelloController {
  constructor(private helloService: HelloService) {}

  @Get()
  findAll(): string {
    return this.helloService.getHello();
  }
}
