import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { Food } from "src/app/model/food";
import { FoodCategory } from "src/app/model/food-category";
import { FoodCategoryService } from "src/app/service/food-category.service";
import { FoodService } from "src/app/service/food.service";
@Component({
  selector: "app-update-food",
  templateUrl: "./update-food.component.html",
  styleUrls: ["./update-food.component.css"],
})
export class UpdateFoodComponent implements OnInit {
  foodCategoryList: FoodCategory[];
  foodCategory: FoodCategory;
  food: Food;
  AddFoodForm: FormGroup;
  foodTypeList: { id: string; foodType: string }[] = [
    {
      id: "1",
      foodType: "Breakfast",
    },
    {
      id: "2",
      foodType: "Lunch",
    },
    {
      id: "3",
      foodType: "Dinner",
    },
  ];

  constructor(
    private foodService: FoodService,
    private foodCategoryService: FoodCategoryService,
    private router: Router,
    private toaster: ToastrService
  ) {
    this.food = new Food();
    this.AddFoodForm = new FormGroup({
      foodId: new FormControl(null, [Validators.required]),
      foodName: new FormControl(null, [Validators.required]),
      foodPrice: new FormControl(null, [Validators.required]),
      foodAvatar: new FormControl(null, [Validators.required]),
      foodPrepTime: new FormControl(null, [Validators.required]),
      foodType: new FormControl(null, [Validators.required]),
      foodStatus: new FormControl(true, [Validators.required]),
      foodCategory: new FormControl(null, [Validators.required]),
    });
  }

  ngOnInit() {
    this.foodService.getFoodById(history.state.foodId).subscribe((res) => {
      this.AddFoodForm.patchValue({
        foodId: res.foodId,
        foodName: res.foodName,
        foodPrice: res.foodPrice,
        foodAvatar: res.foodAvatar,
        foodPrepTime: res.foodPrepTime,
        foodType: res.foodType,
        foodStatus: res.foodStatus,
        foodCategory: res.foodCategory,
      });
    });

    this.foodCategoryService.getAllFoodCategories().subscribe((res) => {
      this.foodCategoryList = res;
    });
  }

  updateFood() {
    this.food.foodId = this.AddFoodForm.value.foodId;
    this.food.foodName = this.AddFoodForm.value.foodName;
    this.food.foodPrice = this.AddFoodForm.value.foodPrice;
    this.food.foodAvatar = this.AddFoodForm.value.foodAvatar;
    this.food.foodPrepTime = this.AddFoodForm.value.foodPrepTime;
    this.food.foodType = this.AddFoodForm.value.foodType.foodType;
    this.food.foodStatus = this.AddFoodForm.value.foodStatus;
    this.food.foodCategory = this.AddFoodForm.value.foodCategory;

    this.foodService.updateFood(this.food).subscribe((res) => {
      console.log(res);
      this.toaster.success(
        res.foodName + " is Updated.",
        "Food Updated Successfully!"
      );
    });
    this.router.navigate(["/revfoods/manage-food"]);
  }
}
