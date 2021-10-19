import { Component, OnInit } from "@angular/core";
import { FoodOrder } from "src/app/model/food-order";
import { FoodOrderService } from "src/app/service/food-order.service";

@Component({
  selector: "app-order-cancellation-request",
  templateUrl: "./order-cancellation-request.component.html",
  styleUrls: ["./order-cancellation-request.component.css"],
})
export class OrderCancellationRequestComponent implements OnInit {
  private foodOrder: FoodOrder;
  private result: FoodOrder[];

  constructor(private service: FoodOrderService) {}

  ngOnInit() {
    this.service
      .getAllFoodOrdersByOrderStatusId(this.foodOrder.foodOrderId)
      .subscribe((res) => {
        this.result = res;
      });
    if (this.foodOrder.orderStatus.orderStatusId == 6) {
      this.service
        .deleteFoodOrder(this.foodOrder.foodOrderId)
        .subscribe((res) => {});
    }
  }
}
