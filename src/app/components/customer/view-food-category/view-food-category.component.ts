import { Component, OnInit } from "@angular/core";
import { FoodCategoryService } from "./../../../service/food-category.service";
import { Food } from "src/app/model/food";
import { FoodCategory } from "./../../../model/food-category";
import { FoodService } from "src/app/service/food.service";
import { CartService } from "src/app/service/cart.service";
import { ToastrService } from "ngx-toastr";
import { Customer } from "src/app/model/customer";
@Component({
  selector: "app-view-food-category",
  templateUrl: "./view-food-category.component.html",
  styleUrls: ["./view-food-category.component.css"],
})
export class ViewFoodCategoryComponent implements OnInit {
  foodCategory: FoodCategory;
  foodList: Food[];
  addCart: boolean;
  prodQuantity: number;
  customer: Customer;
  constructor(
    private foodService: FoodService,
    private cartService: CartService,
    private toaster: ToastrService
  ) {}
  ngOnInit() {
    this.customer = JSON.parse(localStorage.getItem("customer"));
    this.foodService
      .getFoodsByCategoryId(history.state.foodCategoryId)
      .subscribe(async (res) => {
        console.log(res);
        this.foodList = res;
        for (let food of res) {
          food.foodQuantity = 0;
          console.log(food.foodQuantity);
        }
      });
  }

  addToCart(food: Food) {
    food.foodQuantity += 1;
    console.log(food.foodQuantity);
  }

  inc(food: Food) {
    food.foodQuantity += 1;
  }
  dec(food: Food) {
    food.foodQuantity -= 1;
  }

  addFoodToCart(food: Food) {
    this.cartService
      .addFoodAndCustomerToCart(
        food.foodId,
        this.customer.customerId,
        food.foodQuantity
      )
      .subscribe((res) => {
        console.log(res);
        this.toaster.success(
          food.foodName + " is added to the cart.",
          "Food Added To Cart"
        );
        food.foodQuantity = 0;
      });
  }
}
