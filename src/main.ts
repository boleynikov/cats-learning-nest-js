import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { MyExceptionFilter } from './http-exception.filter';
import { loggerMiddleWare } from './logger.middleware';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  
  app.set('query parser', 'extended');

  app.use(loggerMiddleWare);
  app.useGlobalFilters(new MyExceptionFilter());

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
