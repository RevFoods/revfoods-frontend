import { Cart } from "./cart";
import { Chef } from "./chef";
import { OrderStatus } from "./order-status";
import { Supervisor } from "./supervisor";

export class FoodOrder {
  foodOrderId: number;
  orderStatus: OrderStatus;
  cart: Cart;
  chef: Chef;
  supervisor: Supervisor;
}
