import { Cart } from "./cart";
import { CustomerTable } from "./customer-table";

export class Customer {
  customerId: number;
  customerName: string;
  customerUsername: string;
  customerPhone: number;
  customerTable: CustomerTable;
  cartList: Cart[];
}
