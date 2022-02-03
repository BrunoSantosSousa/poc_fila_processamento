import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LogService } from './log/log.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useLogger(app.get(LogService));

  await app.listen(3000);
}
bootstrap();
