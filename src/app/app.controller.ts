import { Controller, Get } from '@nestjs/common';

@Controller('/')
export class AppController {
  @Get()
  basicRoute(): object {
    return {
      welcome_msg:
        'GOOD Now struggle and figure out rest reading my /docs page ',
    };
  }

  @Get()
  docsLink() {}
}
