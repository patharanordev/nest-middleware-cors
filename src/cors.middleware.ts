import {
  HttpException,
  HttpStatus,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { allowedOrigins } from './constants/allowed-origin';

@Injectable()
export class CorsMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    const origin = req.headers.origin;
    const allowedHeaders = [
      'Access-Control-Allow-Origin',
      'Origin',
      'origin',
      'X-Requested-With',
      'Accept',
      'Content-Type',
      'Authorization',
    ]

    // Ensure that client sent origin to our service
    console.log('headers:', req.headers)

    if (allowedOrigins.indexOf(origin) > -1) {
      console.log('allowed cors for:', origin);
      res.setHeader('Access-Control-Allow-Origin', origin);
      res.setHeader('Access-Control-Allow-Methods', 'POST');
      res.setHeader('Access-Control-Allow-Headers', allowedHeaders.join(', '));
      next();
    } else {
      throw new HttpException('Host not allowed', HttpStatus.BAD_REQUEST);
    }

  }
}
