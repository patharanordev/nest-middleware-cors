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
    // const origin = req.headers.origin;
    // // console.log('request from origin:', origin);
    // console.log('req.headers:', req.headers);
    // console.log('req.header:', req.header);
    // console.log('req.originalUrl:', req.originalUrl);
    // console.log('req.url:', req.url);
    // console.log('req.get(\'host\'):', req.get('host'));
    // console.log('req.get(\'Host\'):', req.get('Host'));
    // console.log('req.hostname:', req.hostname);
    // console.log('req.get(\'origin\'):', req.get('origin'));
    // console.log('req:', req);
    // if (allowedOrigins.indexOf(origin) > -1) {
    //   console.log('allowed cors for:', origin);
    //   res.setHeader('Access-Control-Allow-Origin', origin);
    //   res.setHeader('Access-Control-Allow-Methods', 'POST');
    //   res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept');
    //   next();
    // } else {
    //   throw new HttpException('Host not allowed', HttpStatus.BAD_REQUEST);
    // }
    
    next();
  }
}
