import { Component, OnInit } from "@angular/core";
import { FoodOrder } from "src/app/model/food-order";
import { OrderStatus } from "src/app/model/order-status";
import { FoodOrderService } from "src/app/service/food-order.service";
@Component({
  selector: "app-served-orders",
  templateUrl: "./served-orders.component.html",
  styleUrls: ["./served-orders.component.css"],
})
export class ServedOrdersComponent implements OnInit {
  foodOrderList: FoodOrder[];
  constructor(private foodOrderService: FoodOrderService) {}
  ngOnInit() {
    this.foodOrderService
      .getAllFoodOrdersByOrderStatusId(3)
      .subscribe((res) => {
        console.log(res);
        this.foodOrderList = res;
      });
  }
}

