import { Controller, Get, Render,Response ,Request} from '@nestjs/common';

@Controller('user2')
export class User2Controller {
    @Get()
    @Render('default/user2')
    user2() {}
}
