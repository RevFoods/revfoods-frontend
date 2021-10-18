import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { Cart } from "src/app/model/cart";
import { Customer } from "src/app/model/customer";
import { FoodOrder } from "src/app/model/food-order";
import { FoodOrderService } from "src/app/service/food-order.service";
@Component({
  selector: "app-view-customer-orders",
  templateUrl: "./view-customer-orders.component.html",
  styleUrls: ["./view-customer-orders.component.css"],
})
export class ViewCustomerOrdersComponent implements OnInit {
  foodOrderList: FoodOrder[];
  price: number;
  customer: Customer;
  isPaid: string;
  prepTime: number;
  constructor(
    private foodOrderService: FoodOrderService,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.price = 0;
    this.prepTime = 0;
  }
  ngOnInit() {
    this.customer = JSON.parse(localStorage.getItem("customer"));
    this.isPaid = localStorage.getItem("isPaid");
    this.foodOrderService
      .getFoodOrdersByCustomerId(this.customer.customerId)
      .subscribe((res) => {
        this.foodOrderList = res;

        for (let foodOrder of this.foodOrderList) {
          if (
            foodOrder.cart.food.foodPrepTime > this.prepTime &&
            (foodOrder.orderStatus.orderStatus == "Ordered" ||
              foodOrder.orderStatus.orderStatus == "Accepted")
          ) {
            this.prepTime = foodOrder.cart.food.foodPrepTime;
            this.prepTime += 20;
          }
          if (
            foodOrder.cart.food.foodPrice > 0 &&
            foodOrder.cart.cartQuantity > 0 &&
            !(
              foodOrder.orderStatus.orderStatus == "Unavaliable" ||
              foodOrder.orderStatus.orderStatus == "Cancelled" ||
              foodOrder.orderStatus.orderStatus == "Paid" ||
              foodOrder.orderStatus.orderStatus == "Ordered" ||
              foodOrder.orderStatus.orderStatus == "Accepted"
            )
          ) {
            this.price +=
              foodOrder.cart.food.foodPrice * foodOrder.cart.cartQuantity;
            console.log(foodOrder.orderStatus);
          }
        }
      });
  }

  cancelOrder(foodOrderId: number) {
    this.foodOrderService
      .updateFoodOrderStatus(foodOrderId, 5)
      .subscribe((res) => {
        console.log(res);
        this.toastr.success(
          res.cart.food.foodName + " is Requested for Cancel",
          "Request For Cancellation"
        );
        this.ngOnInit();
      });
  }

  payment() {
    this.router.navigateByUrl("/revfoods/payment", {
      state: { totalAmount: this.price },
    });
  }
}
