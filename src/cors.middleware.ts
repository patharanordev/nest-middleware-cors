import {
  HttpException,
  HttpStatus,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { FastifyRequest, FastifyReply } from 'fastify'
import { allowedOrigins } from './constants/allowed-origin';

@Injectable()
export class CorsMiddleware implements NestMiddleware {
  use(req: FastifyRequest, res: FastifyReply, next: () => void) {
    const origin = req.hostname // req.headers.origin;
    const allowedHeaders = [
      'Access-Control-Allow-Origin',
      'Origin',
      'X-Requested-With',
      'Accept',
      'Content-Type',
      'Authorization',
    ]

    // // Ensure that client sent origin to our service
    console.log('headers:', req.headers)
    console.log('url:', req.url)

    console.log('hostname:', req.hostname)
    console.log('routerPath:', req.routerPath)
    console.log('raw:', req.raw)
    console.log('query:', req.query)
    console.log('routeOptions:', req.routeOptions)

    if (allowedOrigins.indexOf(origin) > -1) {
      console.log('allowed cors for:', origin);
      res.header('Access-Control-Allow-Origin', origin);
      res.header('Access-Control-Allow-Methods', 'POST');
      res.header('Access-Control-Allow-Headers', allowedHeaders.join(', '));
      next();
    } else {
      throw new HttpException('Host not allowed', HttpStatus.BAD_REQUEST);
    }

  }
}
