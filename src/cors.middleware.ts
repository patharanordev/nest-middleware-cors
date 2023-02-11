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

    if (allowedOrigins.indexOf(origin) > -1) {
      console.log('allowed cors for:', origin);

      /**
       * DON'T NEED TO SET HEADER HERE
       * 
       * IF SET THE HEADER, YOU WILL GOT ERROR MESSAGE BELOW :
       * [ExceptionsHandler] 
       * Cannot set headers after they are sent to the client
       * Error: Cannot set headers after they are sent to the client
       * at new NodeError (node:internal/errors:393:5)
       * at ServerResponse.setHeader (node:_http_outgoing:644:11)
       * at ServerResponse.header (/var/task/node_modules/express/lib/response.js:794:10)
       * at ServerResponse.send (/var/task/node_modules/express/lib/response.js:174:12)
       * at ExpressAdapter.reply (/var/task/node_modules/@nestjs/platform-express/adapters/express-adapter.js:61:84)
       * at RouterResponseController.apply (/var/task/node_modules/@nestjs/core/router/router-response-controller.js:15:36)
       * at /var/task/node_modules/@nestjs/core/router/router-execution-context.js:176:48
       * at processTicksAndRejections (node:internal/process/task_queues:95:5)
       * at /var/task/node_modules/@nestjs/core/router/router-execution-context.js:47:13
       * at /var/task/node_modules/@nestjs/core/router/router-proxy.js:9:17
       */
      // res.setHeader('Access-Control-Allow-Origin', origin);
      // res.setHeader('Access-Control-Allow-Methods', 'POST');
      // res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Origin, Origin, X-Requested-With, Accept, Content-Type, Authorization');


      // Just next, it enought...
      next();

    } else {
      throw new HttpException('Host not allowed', HttpStatus.BAD_REQUEST);
    }

    next();
  }
}
