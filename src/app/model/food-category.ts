import { Food } from "./food";

export class FoodCategory {
  foodCategoryId: number;
  foodCategoryName: string;
  foodCategoryAvatar: string;
  foodCategoryDescription: string;
  foodList: Food[];
}
