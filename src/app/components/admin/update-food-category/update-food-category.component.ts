import { FoodCategory } from "./../../../model/food-category";
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { FoodCategoryService } from "src/app/service/food-category.service";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
@Component({
  selector: "app-update-food-category",
  templateUrl: "./update-food-category.component.html",
  styleUrls: ["./update-food-category.component.css"],
})
export class UpdateFoodCategoryComponent implements OnInit {
  foodCategory: FoodCategory;
  constructor(private service: FoodCategoryService, private router: Router, private toaster: ToastrService) {}
  UpdateFoodCategoryForm = new FormGroup({
    foodCategoryId: new FormControl("", [Validators.required]),
    foodCategoryName: new FormControl("", [Validators.required]),
    foodCategoryAvatar: new FormControl("", [Validators.required]),
    foodCategoryDescription: new FormControl("", [Validators.required]),
  });
  ngOnInit() {
    this.service
      .getFoodCategoryById(history.state.foodCategoryId)
      .subscribe((res) => {
        this.foodCategory = res;
        this.UpdateFoodCategoryForm.patchValue({
          foodCategoryId: res.foodCategoryId,
          foodCategoryName: res.foodCategoryName,
          foodCategoryAvatar: res.foodCategoryAvatar,
          foodCategoryDescription: res.foodCategoryDescription,
        });
      });
  }
  updateFoodCategory() {
    this.service
      .updateFoodCategory(this.UpdateFoodCategoryForm.value)
      .subscribe((res) => {
        console.log(res);
        this.toaster.success(res.foodCategoryName +" is Updated.","Food Category Updated Successfully!");
      });
    this.router.navigate(["/revfoods/manage-food-category"]);
  }
}
