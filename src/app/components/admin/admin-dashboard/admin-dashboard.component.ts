import { Component, OnInit } from "@angular/core";
import { ChefService } from "src/app/service/chef.service";
import { CustomerService } from "src/app/service/customer.service";
import { FoodCategoryService } from "src/app/service/food-category.service";
import { FoodOrderService } from "src/app/service/food-order.service";
import { FoodService } from "src/app/service/food.service";
import { HelpService } from "src/app/service/help.service";

@Component({
  selector: "app-admin-dashboard",
  templateUrl: "./admin-dashboard.component.html",
  styleUrls: ["./admin-dashboard.component.css"],
})
export class AdminDashboardComponent implements OnInit {
  totalFoods: number;
  totalCustomers: number;
  totalFoodCategories: number;
  totalFoodOrders: number;
  constructor(
    private foodService: FoodService,
    private customerService: CustomerService,
    private foodCategoryService: FoodCategoryService,
    private foodOrderService: FoodOrderService
  ) {}
  ngOnInit() {
    this.foodService.getAllFoods().subscribe((res) => {
      this.totalFoods = res.length;
    });

    this.customerService.getAllCustomers().subscribe((res) => {
      this.totalCustomers = res.length;
    });

    this.foodCategoryService.getAllFoodCategories().subscribe((res) => {
      this.totalFoodCategories = res.length;
    });
    this.foodOrderService.getAllFoodOrders().subscribe((res) => {
      this.totalFoodOrders = res.length;
    });
  }
}
