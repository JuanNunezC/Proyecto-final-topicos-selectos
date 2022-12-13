import { ClienteModel } from './../../models/Cliente.model';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { ClienteService } from 'src/Services/cliente/cliente.service';


@Controller('cliente')
export class ClienteController {
    constructor(private clienteService: ClienteService){}
    @Post()
    Create(@Body()params:ClienteModel){
        try {
            this.clienteService.create(params)
        } catch (error) {
            console.log("error =>"+error)
        }
    }
    @Post("/create")
    Create2(@Body()params:ClienteModel){
        try {
            this.clienteService.create(params)
        } catch (error) {
            console.log("error =>"+error)
        }
    }
    @Get()
    Getall(){
        try {
            return this.clienteService.getall()
        } catch (error) {
            console.log(error)
        }
    }
}
