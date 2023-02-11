// import { NestFactory } from '@nestjs/core';
// import { NestFastifyApplication } from '@nestjs/platform-fastify';

// import { AppModule } from './app.module';

// async function bootstrap() {
//   const app = await NestFactory.create<NestFastifyApplication>(AppModule);
//   await app.listen(3000, '0.0.0.0');
// }
// bootstrap();



import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  await app.listen(3000, '0.0.0.0');
}
bootstrap();
