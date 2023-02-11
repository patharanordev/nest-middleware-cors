import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { allowedOrigins } from './constants/allowed-origin'
import { HttpException, HttpStatus } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: (origin, callback) => {
      console.log('origin:', origin)
      if (allowedOrigins.indexOf(origin) !== -1) {
        console.log("allowed cors for:", origin)
        callback(null, true)
      } else {
        console.log("blocked cors for:", origin)
        callback(new HttpException('Host not allowed', HttpStatus.BAD_REQUEST))
      }
    },
    methods: "POST,OPTIONS",
    credentials: true,
  })
  await app.listen(3000, '0.0.0.0');
}
bootstrap();
