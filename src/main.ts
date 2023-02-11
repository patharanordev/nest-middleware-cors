import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

import { AppModule } from './app.module';
import { allowedOrigins } from './constants/allowed-origin'
import { HttpException, HttpStatus } from '@nestjs/common';

// const CORS_OPTIONS = {
//   origin: (origin, callback) => {
//     console.log('origin:', origin)
//     if (allowedOrigins.indexOf(origin) !== -1) {
//       console.log("allowed cors for:", origin)
//       callback(null, true)
//     } else {
//       console.log("blocked cors for:", origin)
//       callback(new HttpException('Host not allowed', HttpStatus.BAD_REQUEST))
//     }
//   },
//   // origin: allowedOrigins,
//   allowedHeaders: [
//     'Access-Control-Allow-Origin',
//     'Origin',
//     'X-Requested-With',
//     'Accept',
//     'Content-Type',
//     'Authorization',
//   ],
//   methods: "POST,OPTIONS",
//   credentials: true,
// }

async function bootstrap() {
  // const adapter = new FastifyAdapter();
  // adapter.enableCors(CORS_OPTIONS)
  // const app = await NestFactory.create<NestFastifyApplication>(AppModule, adapter);

  const app = await NestFactory.create<NestFastifyApplication>(AppModule);

  // app.enableCors(CORS_OPTIONS)
  await app.listen(3000, '0.0.0.0');
}
bootstrap();
