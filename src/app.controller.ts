import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  
  // @Get()
  // @Render('default/index')
  // getHello() {
  //   return {'name':'张三','age':20}
  // }


}
