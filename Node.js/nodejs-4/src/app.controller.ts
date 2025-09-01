import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async niceToSee(): Promise<string> {
    return await this.appService.niceToSee();
  }

  @Get("/hey")
  async sayHey(): Promise<string> {
    return await this.appService.sayHey();
  }

  @Get("/bye")
  async sayBye(): Promise<string> {
    return await this.appService.sayBye();
  }
}
