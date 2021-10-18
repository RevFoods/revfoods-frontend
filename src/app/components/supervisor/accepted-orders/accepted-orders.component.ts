import { Component, OnInit } from "@angular/core";
import { FoodOrder } from "src/app/model/food-order";
import { FoodOrderService } from "src/app/service/food-order.service";
​
@Component({
  selector: "app-accepted-orders",
  templateUrl: "./accepted-orders.component.html",
  styleUrls: ["./accepted-orders.component.css"],
})
export class AcceptedOrdersComponent implements OnInit {
  foodOrderList: FoodOrder[];
  constructor(private foodOrderService: FoodOrderService) {}
​
  ngOnInit() {
    this.foodOrderService
      .getAllFoodOrdersByOrderStatusId(2)
      .subscribe((res) => {
        console.log(res);
        this.foodOrderList = res;
        this.foodOrderService;
      });
  }
}