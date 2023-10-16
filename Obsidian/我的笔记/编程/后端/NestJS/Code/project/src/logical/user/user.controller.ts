import { Body, Controller, Post, UseGuards, UsePipes } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthService } from '../auth/auth.service';
import { AuthGuard } from '@nestjs/passport';
import { ValidationPipe } from '../../pipe/validation/validation.pipe';
import { RegisterInfoDTO } from './user.dto';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  @UseGuards(AuthGuard('jwt')) // 使用 jwt 进行验证
  @Post('find-one')
  findOne(@Body() body: any) {
    return this.userService.findOne(body);
  }

  @UsePipes(new ValidationPipe()) // 使用管道验证
  @Post('register')
  // DTO 调用需要指定 body 类型的同时还需要进行类型注解 @UsePipes(new V)
  async register(@Body() body: RegisterInfoDTO) {
    return await this.userService.register(body);
  }

  // JWT验证 - Step 1: 用户请求登录
  @Post('login')
  async login(@Body() loginParmas: any) {
    console.log('JWT验证 - Step 1: 用户请求登录');
    const authResult = await this.authService.validateUser(
      loginParmas.username,
      loginParmas.password,
    );
    console.log({ authResult });
    switch (authResult.code) {
      case 1:
        return this.authService.certificate(authResult.user);
      case 2:
        return {
          code: 600,
          msg: `账号或密码不正确`,
        };
      default:
        return {
          code: 600,
          msg: `查无此人`,
        };
    }
  }
}
