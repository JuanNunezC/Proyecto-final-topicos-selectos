import { PagoEntity } from './Pago.Entity';
import { ClienteEntity } from './Cliente.Entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn} from 'typeorm';
@Entity()
export class ConsumoEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fecha: Date;
    @Column()
    consumo: number;
    @ManyToOne(() => ClienteEntity, (Cliente) => Cliente.consumo)
    @JoinColumn({name:'idCliente'})
    idCliente: number;

    @OneToMany(() => PagoEntity, (pago) => pago.idConsumo)
    pago: PagoEntity[];
}