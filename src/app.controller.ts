import { Controller, HttpStatus, Get, Post, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
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
