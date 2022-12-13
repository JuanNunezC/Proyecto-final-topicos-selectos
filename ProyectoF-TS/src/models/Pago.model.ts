import { ConsumoModel } from './Consumo.model';
export interface PagoModel{
    id:number;
    Consumo:ConsumoModel[];
    fecha: Date;
    total:number;
    pagado: boolean;
}