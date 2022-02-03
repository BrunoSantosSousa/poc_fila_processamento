import { Injectable, LoggerService } from '@nestjs/common';

@Injectable()
export class LogService implements LoggerService {
  log(message: any) {
    console.log('Meu log', message);
  }
  error(message: any) {
    console.log('Meu log', message);
  }
  warn(message: any) {
    console.log('Meu log', message);
  }
  debug?(message: any) {
    console.log('Meu log', message);
  }
  verbose?(message: any) {
    console.log('Meu log', message);
  }
}
