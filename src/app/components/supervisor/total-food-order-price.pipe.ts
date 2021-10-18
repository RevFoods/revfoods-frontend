import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "totalFoodOrderPrice",
})
export class TotalFoodOrderPricePipe implements PipeTransform {
  transform(foodPrice: number, cartQuantity: number): number {
    return foodPrice * cartQuantity;
  }
}
