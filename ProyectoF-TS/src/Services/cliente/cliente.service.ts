import { ClienteModel } from './../../models/Cliente.model';
import { ClienteEntity } from './../../Entity/Cliente.Entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ClienteService {

    constructor(@InjectRepository(ClienteEntity)
                private clienteRepository: Repository<ClienteEntity>){}

    async create(cliente:ClienteModel){
        return await this.clienteRepository.insert(cliente).catch((error) => console.log("error =>"+ error))
    }

    getall():Promise<ClienteEntity[]>{
        return this.clienteRepository.find()
    }

    async getany(id:number):Promise<ClienteEntity>{
        return  await this.clienteRepository.findOne({
            where: {
                id: id
            }
        })
    }
}
