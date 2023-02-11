import { Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { allowedHost } from './constants/allowed-origin';

@Controller({ host: allowedHost })
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async getHello(@Res() res) {
    return res.send({
      statusCode: HttpStatus.OK,
      message: this.appService.getHello()
    });
  }
}
