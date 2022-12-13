import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Connection } from './DB/DBConection';
import { ConfigModule } from '@nestjs/config';

import { PagoModule } from './api/pago/pago.module';
import { ClienteModule } from './api/cliente/cliente.module';
import { ConsumoModule } from './api/consumo/consumo.module';


@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: process.env.NODE_ENV === 'docker' ? '.env': '.env.local'
  }),Connection,PagoModule, ConsumoModule, ClienteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
