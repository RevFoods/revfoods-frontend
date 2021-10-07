import { OrderStatus } from "./order-status";
import { Cart } from "./cart";
import { Chef } from "./chef";
import { Supervisor } from "./supervisor";

export class Order {
    orderId: number;
    orderStatus: OrderStatus;
    cart: Cart;
    chef: Chef;
    supervisor: Supervisor;
}