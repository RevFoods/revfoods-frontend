import { FoodOrder } from "./food-order";
import { Help } from "./help";

export class Supervisor {
  supervisorId: number;
  supervisorUsername: string;
  supervisorPassword: string;
  foodOrderList: FoodOrder[];
  helpList: Help[];
}
