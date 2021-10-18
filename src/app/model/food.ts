import { Cart } from "./cart";
import { FoodCategory } from "./food-category";
export class Food {
  foodId: number;
  foodPrice: number;
  foodName: string;
  foodAvatar: string;
  foodPrepTime: number;
  foodType: string;
  foodStatus: boolean;
  foodCategory: FoodCategory;
  foodQuantity: number = 1;
  cartList: Cart[];
}
