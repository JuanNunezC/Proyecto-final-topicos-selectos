import { TypeOrmModule } from '@nestjs/typeorm';
import { PagoEntity } from './../Entity/Pago.Entity';
import { ConsumoEntity } from './../Entity/Consumo.Entity';
import { ClienteEntity } from './../Entity/Cliente.Entity';

export const Connection = TypeOrmModule.forRoot({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [ClienteEntity, ConsumoEntity, PagoEntity],
    synchronize: true,
  })