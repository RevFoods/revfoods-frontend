import { Help } from "./help";
import { Order } from "./order";

export class Supervisor {
  supervisorId: number;
  orderList: Order[];
  help: Help;
}
