import {Body, Controller, Post} from '@nestjs/common';
import { AppService } from './app.service';
import {InfoUserDto, ResultInfoUserDto} from "./app.dto";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async getUser(@Body() data: InfoUserDto): Promise <ResultInfoUserDto> {
    return await this.appService.getUserInfo(data);
  }
}
