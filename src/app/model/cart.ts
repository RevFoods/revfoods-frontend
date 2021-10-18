import { Customer } from "./customer";
import { Food } from "./food";
import { FoodOrder } from "./food-order";

export class Cart {
  cartId: number;
  customer: Customer;
  food: Food;
  cartQuantity: number;
  foodOrder: FoodOrder;
  cartOrderedStatus: boolean;
}
