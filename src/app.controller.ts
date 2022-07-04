import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller("wapo")
export class AppController {
  constructor() {}

  @Get()
  getHello(): string {
    return"wapo";
  }
}
