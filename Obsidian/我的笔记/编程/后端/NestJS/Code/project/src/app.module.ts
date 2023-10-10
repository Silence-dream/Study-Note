import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { UserService } from './logical/user/user.service';
// import { UserController } from './logical/user/user.controller';
import { UserModule } from './logical/user/user.module';

@Module({
  // 引入 module 之后 就无需再次编写 controllers 和 providers 了
  imports: [UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
