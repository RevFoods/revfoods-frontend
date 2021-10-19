import { Component, OnInit } from "@angular/core";
import { FoodOrder } from "src/app/model/food-order";
import { FoodOrderService } from "src/app/service/food-order.service";

@Component({
  selector: "app-view-orders",
  templateUrl: "./view-orders.component.html",
  styleUrls: ["./view-orders.component.css"],
})
export class ViewOrdersComponent implements OnInit {
  private foodOrderList: FoodOrder[];

  constructor(private service: FoodOrderService) {}

  ngOnInit() {
    this.service.getAllFoodOrders().subscribe((res) => {
      this.foodOrderList = res;
    });
  }
}
