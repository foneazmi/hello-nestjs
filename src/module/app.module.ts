import { Module } from '@nestjs/common';
import { HelloModule } from './hello/hello.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    //
    HelloModule,
    UserModule,
  ],
})
export class AppModule {}
