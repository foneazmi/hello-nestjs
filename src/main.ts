import { NestFactory } from '@nestjs/core';
import { AppModule } from './module/app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get<ConfigService>(ConfigService);

  const config = new DocumentBuilder()
    .setTitle('Hello Nestjs')
    .setDescription('Hello Nestjs')
    .setVersion(configService.get<string>('npm_package_version'))
    .addTag('Hello')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
