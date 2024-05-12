import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(['/', '/hello'])
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/bye')
  getBy(): string {
    return this.appService.getBy();
  }

  @Get('/bye-v2')
  getByV2(): string {
    return this.appService.getByV2();
  }
}
