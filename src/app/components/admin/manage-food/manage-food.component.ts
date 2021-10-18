import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { Food } from "src/app/model/food";
import { FoodCategoryService } from "src/app/service/food-category.service";
import { FoodService } from "src/app/service/food.service";
@Component({
  selector: "app-manage-food",
  templateUrl: "./manage-food.component.html",
  styleUrls: ["./manage-food.component.css"],
})
export class ManageFoodComponent implements OnInit {
  constructor(private foodservice: FoodService, private router: Router, private toaster: ToastrService) {}
  foodList: Food[];
  ngOnInit() {
    this.foodservice.getAllFoods().subscribe((res) => {
      this.foodList = res;
      console.log(res);
    });
  }
  public delete(foodId: number): void {
    console.log(foodId);
    this.foodservice.deleteFood(foodId).subscribe();
    this.toaster.success( "","Food Deleted Successfully!");
    this.ngOnInit();
  }

  public update(foodId: number): void {
    this.router.navigateByUrl("/revfoods/update-food", {
      state: { foodId: foodId },
    });
  }
}
