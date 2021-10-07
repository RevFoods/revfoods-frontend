import { Cart } from "./cart";
import { Table } from "./table";

export class Customer {
    customerId: number;
    customerName: string;
    customerUsername: string;
    customerPhone: number;
    table: Table;
    cartList: Cart[]; 
}
