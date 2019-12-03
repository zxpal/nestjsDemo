import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { UserController } from './user/user.controller';
import { User2Controller } from './user2/user2.controller';


@Module({
  imports: [PostsModule],
  controllers: [AppController, UserController, User2Controller],
  providers: [AppService],
})

export class AppModule {

}

