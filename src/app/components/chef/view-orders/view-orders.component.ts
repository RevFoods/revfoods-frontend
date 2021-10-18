import { Component, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { Food } from "src/app/model/food";
import { FoodOrder } from "src/app/model/food-order";
import { FoodOrderService } from "src/app/service/food-order.service";
@Component({
  selector: "app-view-orders",
  templateUrl: "./view-orders.component.html",
  styleUrls: ["./view-orders.component.css"],
})
export class ViewOrdersComponent implements OnInit {
  foodOrderList: FoodOrder[];
  constructor(
    private foodOrderService: FoodOrderService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.foodOrderService.getAllFoodOrdersForChef().subscribe((res) => {
      this.foodOrderList = res;
      console.log(res);
    });
  }

  acceptOrder(foodOrderId: number) {
    this.foodOrderService
      .updateFoodOrderStatus(foodOrderId, 2)
      .subscribe((res) => {
        console.log(res);
        this.toastr.success(
          res.cart.food.foodName + " is accepted successfully!",
          "Food Order Accepted!"
        );
        this.ngOnInit();
      });
  }

  serveOrder(foodOrderId: number) {
    this.foodOrderService
      .updateFoodOrderStatus(foodOrderId, 3)
      .subscribe((res) => {
        console.log(res);
        this.toastr.info(
          res.cart.food.foodName + " is served successfully!",
          "Food Order Served!"
        );
        this.ngOnInit();
      });
  }

  unavaliable(foodOrderId: number) {
    this.foodOrderService
      .updateFoodOrderStatus(foodOrderId, 4)
      .subscribe((res) => {
        console.log(res);
        this.toastr.error(
          res.cart.food.foodName + " is marked as unavailable!",
          "Food Order Unavailable!"
        );
        this.ngOnInit();
      });
  }
}
