import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
async function bootstrap() {
  
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
 
  // 配置静态资源目录
  app.useStaticAssets('public');

  // 配置虚拟目录

  // app.useStaticAssets('public',{ 
  //   prefix:'/static'
  // });

  // 配置模板引擎
  app.setBaseViewsDir('views');
  app.setViewEngine('ejs');
  
  // 生成接口文档
  const options = new DocumentBuilder()
  .setTitle('nestAPI')
  .setDescription('第一个nestjs项目')
  .setVersion('1.0')
  .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);

  // 管道验证
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000)
}
bootstrap();
