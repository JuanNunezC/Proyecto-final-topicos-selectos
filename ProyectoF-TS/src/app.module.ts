import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PagoModule } from './api/pago/pago.module';
import { ConsumoModule } from './api/consumo/consumo.module';
import { ClienteModule } from './api/cliente/cliente.module';
import { ConfigModule } from '@nestjs/config';
import { Connection } from './DB/DBConection';

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: process.env.NODE_ENV === 'docker' ? '.env': '.env.local'
  }),Connection,PagoModule, ConsumoModule, ClienteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
