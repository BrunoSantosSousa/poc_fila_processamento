import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LogModule } from './log/log.module';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [
    LogModule,
    UsuarioModule,
    MongooseModule.forRoot('mongodb://127.0.0.1:27017'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
