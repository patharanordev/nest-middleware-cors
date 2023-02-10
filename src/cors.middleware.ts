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
    const hostname = req.hostname;
    console.log('hostname:', hostname);
    if (allowedOrigins.indexOf(hostname) > -1) {
      console.log('allowed cors for:', hostname);
      res.setHeader('Access-Control-Allow-Origin', hostname);
      res.setHeader('Access-Control-Allow-Methods', 'POST');
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept');
      next();
    } else {
      throw new HttpException('Host not allowed', HttpStatus.BAD_REQUEST);
    }
  }
}
