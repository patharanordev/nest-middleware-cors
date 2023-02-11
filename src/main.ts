import { NestFactory } from '@nestjs/core';
import { NestFastifyApplication } from '@nestjs/platform-fastify';

import { AppModule } from './app.module';
import { allowedOrigins } from './constants/allowed-origin';

async function bootstrap() {
  // const app = await NestFactory.create<NestFastifyApplication>(AppModule);
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: allowedOrigins
  })
  await app.listen(3000, '0.0.0.0');
}
bootstrap();
