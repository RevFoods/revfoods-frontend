import { Order } from "./order";

export class Chef {
  chefId: number;
  chefName: string;
  chefUsername: string;
  chefPassword: string;
  orderList: Order[];
}
