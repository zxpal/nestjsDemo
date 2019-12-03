import { Controller, Get, Body, Post, Response, Render } from '@nestjs/common';

@Controller('user')
export class UserController {
    
    @Get()
    @Render('default/user')
    index() { }

    @Post('doAdd')
    doAdd(@Body() body, @Response() res) {
        console.log(body);
        res.redirect('/user2');
    }

}
