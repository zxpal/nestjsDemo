import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { AppService } from './../app.service';

@Module({
  controllers: [PostsController],
  providers: [AppService]
})
export class PostsModule { }
