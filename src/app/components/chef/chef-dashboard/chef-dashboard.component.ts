import { Component, OnInit } from "@angular/core";
import { stringify } from "querystring";
import { FoodOrder } from "src/app/model/food-order";
import { OrderStatus } from "src/app/model/order-status";
import { FoodOrderService } from "src/app/service/food-order.service";

@Component({
  selector: "app-chef-dashboard",
  templateUrl: "./chef-dashboard.component.html",
  styleUrls: ["./chef-dashboard.component.css"],
})
export class ChefDashboardComponent implements OnInit {
  private foodOrder: FoodOrder;
  private result: FoodOrder[];
  constructor(private service: FoodOrderService) {}

  ngOnInit() {
    this.service
      .getAllFoodOrdersByOrderStatusId(this.foodOrder.foodOrderId)
      .subscribe((res) => {
        this.result = res;
      });
  }
}
