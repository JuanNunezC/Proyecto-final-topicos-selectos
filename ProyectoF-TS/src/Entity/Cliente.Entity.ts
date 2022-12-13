import { Entity, Column, PrimaryGeneratedColumn, OneToMany} from 'typeorm';
import { ConsumoEntity } from './Consumo.Entity';

@Entity()
export class ClienteEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;
    @Column()
    apellido: string;
    @Column()
    correo: string;
    @Column()
    telefono: string;
    @Column()
    domicilio: string;
    @Column()
    fechaNacimiento: Date;
    @OneToMany(() => ConsumoEntity, (consumo) => consumo.idCliente)
    consumo: ConsumoEntity[];
}