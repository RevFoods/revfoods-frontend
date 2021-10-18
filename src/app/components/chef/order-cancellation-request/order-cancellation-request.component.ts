import { Component, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { FoodOrder } from "src/app/model/food-order";
import { FoodOrderService } from "src/app/service/food-order.service";
@Component({
  selector: "app-order-cancellation-request",
  templateUrl: "./order-cancellation-request.component.html",
  styleUrls: ["./order-cancellation-request.component.css"],
})
export class OrderCancellationRequestComponent implements OnInit {
  foodOrderList: FoodOrder[];
  constructor(
    private foodOrderService: FoodOrderService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.foodOrderService
      .getAllFoodOrdersByOrderStatusId(5)
      .subscribe((res) => {
        this.foodOrderList = res;
        console.log(res);
      });
  }

  acceptCancellationOrder(foodOrderId: number) {
    this.foodOrderService
      .updateFoodOrderStatus(foodOrderId, 6)
      .subscribe((res) => {
        console.log(res);
        this.toastr.success(
          res.cart.food.foodName + " has been cancelled.",
          "Order Cancelled!"
        );
        this.ngOnInit();
      });
  }

  rejectCancellationOrder(foodOrderId: number) {
    this.foodOrderService
      .updateFoodOrderStatus(foodOrderId, 3)
      .subscribe((res) => {
        console.log(res);
        this.toastr.error(
          res.cart.food.foodName + " is already prepared.",
          "Request Denied!"
        );
        this.ngOnInit();
      });
  }
}
