import { Cart } from "./cart";
import { CustomerTable } from "./customer-table";
import { Feedback } from "./feedback";
import { Help } from "./help";

export class Customer {
  customerId: number;
  customerName: string;
  customerEmail: string;
  customerPhone: number;
  customerTable: CustomerTable;
  cartList: Cart[];
  feedback: Feedback;
  help: Help;
}
