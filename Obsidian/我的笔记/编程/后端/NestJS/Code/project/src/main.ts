import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  // LoggerMiddleware,
  logger,
} from './middleware/logger/logger.middleware';
import * as express from 'express';
import { TransformInterceptor } from './interceptor/transform/transform.interceptor';
import { HttpExceptionFilter } from './filter/http-exception/http-exception.filter';
import { AllExceptionsFilter } from './filter/any-exception/any-exception.filter';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // app.use(new LoggerMiddleware().use);

  // 日志
  app.use(logger);
  // 全局拦截器
  app.useGlobalInterceptors(new TransformInterceptor());
  // 全局路由前缀
  app.setGlobalPrefix('api');

  // 过滤处理 HTTP 异常
  app.useGlobalFilters(new AllExceptionsFilter());
  app.useGlobalFilters(new HttpExceptionFilter());

  // Swagger 配置
  const options = new DocumentBuilder()
    .setTitle('一个 Swagger 文档标题')
    .setDescription('一个 Swagger 文档描述')
    .setVersion('1.0')
    .addTag('一个 tag')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-doc', app, document);

  await app.listen(3000);
}
bootstrap();
