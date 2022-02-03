import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  logger = new Logger(AppService.name);

  getHello(): string {
    this.logger.log('hello world');
    return 'Hello World!';
  }
}
