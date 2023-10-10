import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// 局部路由前缀
@Controller('lesson')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('helloworld')
  getHello(): string {
    return this.appService.getHello();
  }
}
