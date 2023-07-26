import { Customer } from "./customer";

export class Booking {
    id!:number;
    customer!:Customer;
    type!:string;
    brand!:string;
    model!:string;
    description!:string;
    status!: string;
}
