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
  allOrdersCount: number;
  acceptedOrdersCount: number;
  servedOrdersCount: number;
  cancelledOrdersCount: number;
  constructor(private foodOrderService: FoodOrderService) {}
  ngOnInit() {
    this.foodOrderService.getAllFoodOrders().subscribe((res) => {
      this.allOrdersCount = res.length;
    });
    this.foodOrderService
      .getAllFoodOrdersByOrderStatusId(2)
      .subscribe((res) => {
        this.acceptedOrdersCount = res.length;
      });
    this.foodOrderService
      .getAllFoodOrdersByOrderStatusId(3)
      .subscribe((res) => {
        this.servedOrdersCount = res.length;
      });
    this.foodOrderService
      .getAllFoodOrdersByOrderStatusId(6)
      .subscribe((res) => {
        this.cancelledOrdersCount = res.length;
      });
  }
}
