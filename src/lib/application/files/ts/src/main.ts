import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { appConfig } from './config';

async function bootstrap() {
  const config = appConfig();
  const logger = new Logger('Bootstrap');

  const app = await NestFactory.create(AppModule);

  await app.listen(config.server.port);
  logger.log(`Application is running on : ${await app.getUrl()}`);
}
bootstrap();
