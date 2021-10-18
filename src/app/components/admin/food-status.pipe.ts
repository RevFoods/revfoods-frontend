import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "foodStatus",
})
export class FoodStatusPipe implements PipeTransform {
  transform(foodStatus: boolean): string {
    if (foodStatus == true) {
      return "Avaliable";
    } else {
      return "Unavaliable";
    }
  }
}
