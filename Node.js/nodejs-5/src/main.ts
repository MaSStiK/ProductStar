import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {ValidationPipe} from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // автоматически удаляет свойства, которых нет в DTO
    forbidNonWhitelisted: true, // выбрасывает ошибку, если отправлены свойства, которых нет в DTO
    transform: true, // автоматически преобразует типы
  }));
  await app.listen(3000);
}
bootstrap();
