import { FoodOrder } from "./food-order";
import { Help } from "./help";

export class Supervisor {
  supervisorId: number;
  foodOrderList: FoodOrder[];
  help: Help;
}
