import { Customer } from "./customer";
import { Food } from "./food";

export class Cart {
  cartId: number;
  customer: Customer;
  food: Food;
  cartQuantity: number;
}
