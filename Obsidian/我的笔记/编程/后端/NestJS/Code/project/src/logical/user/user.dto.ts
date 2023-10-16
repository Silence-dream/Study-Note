import { IsNotEmpty, IsString } from 'class-validator';

// src/logical/user
export class RegisterInfoDTO {
  @IsNotEmpty({ message: '用户名不能为空' })
  readonly accountName: string | number;
  @IsNotEmpty({ message: '真实姓名能为空' })
  @IsString({ message: '真实姓名必须是 String 类型' })
  readonly realName: string;
  @IsNotEmpty({ message: '密码不能为空' })
  readonly password: string;
  @IsNotEmpty({ message: '确认密码不能为空' })
  readonly repassword: string;
  @IsNotEmpty({ message: '手机号不能为空' })
  readonly mobile: number;
  readonly role?: string | number;
}
