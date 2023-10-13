import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  // LoggerMiddleware,
  logger,
} from './middleware/logger/logger.middleware';
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // app.use(new LoggerMiddleware().use);
  app.use(logger);
  // 全局路由前缀
  app.setGlobalPrefix('api');
  await app.listen(3000);
}
bootstrap();
