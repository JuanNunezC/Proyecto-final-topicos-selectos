import { Body, Controller, Get, Post } from '@nestjs/common';
import { ConsumoModel } from 'src/models/Consumo.model';
import { ConsumoService } from 'src/Services/consumo/consumo.service';

@Controller('consumo')
export class ConsumoController {
    constructor(private consumoservice: ConsumoService){}
    
    @Post()
    Create(@Body()params:ConsumoModel){
        try {
            this.consumoservice.create(params).then((res) =>console.log(res))
        } catch (error) {
            console.log("error =>"+error)
        }
    }
    @Get()
    Getall(){
        return this.consumoservice.getall().catch((err) => console.log(err))
    }
    @Get("/max")
    Getall2(){
        return this.consumoservice.getmaximo().catch((err) => console.log(err))
    }
    @Get("/min")
    Getmin(){
        return this.consumoservice.getmin().catch((err) => console.log(err))
    }
}
