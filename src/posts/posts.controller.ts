import { AppService } from './../app.service';
import { Controller, Get, Post, Query, Body, Param, Put, Render, Response, HttpCode } from '@nestjs/common';
import { ApiOperation, ApiUseTags, ApiModelProperty, ApiResponse } from '@nestjs/swagger';
import { IsNotEmpty, Length } from 'class-validator';

class CreatePostDto {
    // @ApiModelProperty({ description: '标题' })
    // @IsNotEmpty({ message: '请填写标题' })
    // @Length(10, 20, { message: '请输入10-20个字符' })
    title: string;
    //@ApiModelProperty({ description: '内容' })
    content: string
}
@Controller('posts')
@ApiUseTags('posts标签')
export class PostsController {
    constructor(private appService: AppService) { }
    // 模板引擎
    @Get()
    @Render('default/index')
    getHello() {
        return { 'name': '张三', 'age': 40 }
    }

    // @Get('detial1')
    // getHello() {
    //     // return this.appService.getHello();
    //     return '123';
    // }

   
    // 详情接口
    @Get('detail') //匹配路由,不要写分号
    @ApiOperation({ title: '显示详情',description:'详情描述' })
    // @HttpCode(204) //控制响应状态码
    index(@Query() data: string) { // @Query 装饰器传值返回url参数中id的value
        console.log('data-----', data);
        return `我是详情页${data}`;
    }

    //获取动态路由
    @Get(':id')
    detail(@Param('id') id: string) {
        console.log('id-----', id);
        return id;
    }
    // 创建列表接口
    @Post('createList')
    create(@Body() bodyCreatePostDto?: CreatePostDto) {
        console.log(bodyCreatePostDto);
        return '我是post请求返回值'
    }

    // 更新详情接口
    @Put('updateDetail/:id')
    // @ApiOperation({ title: '更新详情页' })
    update(@Param('id') id: string, @Body() updateDetailDto) {
        console.log('id-----', id)
        console.log('updatePostDto------', updateDetailDto)

        return updateDetailDto;
    }

}
