import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { FoodCategory } from "src/app/model/food-category";
import { FoodCategoryService } from "src/app/service/food-category.service";
@Component({
  selector: "app-manage-food-category",
  templateUrl: "./manage-food-category.component.html",
  styleUrls: ["./manage-food-category.component.css"],
})
export class ManageFoodCategoryComponent implements OnInit {
  foodCategories: FoodCategory[];

  constructor(
    private foodCategoryService: FoodCategoryService,
    private router: Router,
    private toaster: ToastrService
  ) {}
  ngOnInit() {
    this.foodCategoryService.getAllFoodCategories().subscribe((res) => {
      this.foodCategories = res;
    });
  }

  delete(foodCategoryId: number) {
    this.foodCategoryService
      .deleteFoodCategory(foodCategoryId)
      .subscribe((res) => console.log(res));
    this.toaster.success("", "Food Category Deleted Successfully!");
    this.ngOnInit();
  }
  update(foodCategoryId: number) {
    this.router.navigateByUrl("/revfoods/update-food-category", {
      state: { foodCategoryId: foodCategoryId },
    });
  }
}
