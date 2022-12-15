import { ConsumoModel } from './../../models/Consumo.model';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ConsumoEntity } from 'src/Entity/Consumo.Entity';
import { LessThan, MoreThan, Repository } from 'typeorm';
import { ClienteService } from '../cliente/cliente.service';
import { PagoService } from '../pago/pago.service';

@Injectable()
export class ConsumoService {
    constructor(@InjectRepository(ConsumoEntity)
    private consumoRepository: Repository<ConsumoEntity>,
    private pagoservice:PagoService,
    private cliente: ClienteService){}

   async create(consumo: ConsumoModel){
        const date= new Date();
        let total=0;
        let pagado= false
        if(consumo.consumo>0 && consumo.consumo<101){
            total= consumo.consumo*150;
        }
        else if(consumo.consumo>=101 && consumo.consumo<301){
            total= consumo.consumo*170;
        }
        else if(consumo.consumo>=301){
            total= consumo.consumo*190;
        }
        let age;
        
        this.cliente.getany(consumo.idCliente).then((res)=> {
            console.log(res.fechaNacimiento)
           age = this.calcularedad(res.fechaNacimiento)
        
        });
        if(age>=50){
            total=total - (total*.10)
        }
        const newconsumo = await this.consumoRepository.save({
            fecha: date,
            consumo:consumo.consumo,
            idCliente:consumo.idCliente
            
        }).then(
            (res) => this.pagoservice.create_pago(res.id ,total, pagado).then((res)=> console.log(res)).catch((error) => console.log(error))
        )
        .catch((error) => console.log(error))
    }
    getall(){
        return this.consumoRepository.find({
            relations:['idCliente','pago.idConsumo']
        })
    }
    getmaximo(){
        return this.consumoRepository.find({
            take:1,
            order: {
                consumo: 'DESC'
            }
        })
    }

    getmin(){
        return this.consumoRepository.find({
            take:1,
            order: {
                consumo: 'ASC'
            }
        })
    }
    calcularedad(datenacimiento:Date){
        const date2 = new Date();
        const fechaaminiento = new Date(datenacimiento)
        const anoactual:number = date2.getFullYear();
        const mesactual:number = date2.getMonth();
        const diaactual:number = date2.getDate();

        const anoNacimiento = parseInt(String(fechaaminiento).substring(0,4))
        const mesNacimiento = parseInt(String(fechaaminiento).substring(5,7))
        const diaNacimiento = parseInt(String(fechaaminiento).substring(8,10))
        let edad = anoactual - anoNacimiento;
        if(mesactual < mesNacimiento){
            edad--
        }else if(mesactual === mesNacimiento){
            if(diaactual < diaNacimiento){
                edad--
            }
        }
        return edad

    }
}
