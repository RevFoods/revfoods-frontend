import { Component, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { Customer } from "src/app/model/customer";
import { FoodOrder } from "src/app/model/food-order";
import { OrderStatus } from "src/app/model/order-status";
import { CustomerService } from "src/app/service/customer.service";
import { FoodOrderService } from "src/app/service/food-order.service";
import { OrderStatusService } from "src/app/service/order-status.service";
@Component({
  selector: "app-pending-bills",
  templateUrl: "./pending-bills.component.html",
  styleUrls: ["./pending-bills.component.css"],
})
export class PendingBillsComponent implements OnInit {
  foodOrderList: FoodOrder[];
  customerList: Customer[];
  constructor(
    private foodOrderService: FoodOrderService,
    private customerService: CustomerService,
    private toaster: ToastrService
  ) {}
  ngOnInit() {
    this.customerService.getAllCustomersByOrderStatusId(7).subscribe((res) => {
      console.log(res);
      this.customerList = res;
    });
  }

  paid(customerId: number) {
    this.foodOrderService
      .getFoodOrdersByCustomerId(customerId)
      .subscribe((res) => {
        console.log(res);
        for (let foodOrder of res) {
          this.foodOrderService
            .updateFoodOrderStatus(foodOrder.foodOrderId, 8)
            .subscribe((data) => {
              console.log(data);
              this.toaster.success(
                foodOrder.cart.customer.customerName + " paid successfully.",
                "Order Paid Successfully!!"
              );
            });
        }
      });
    this.ngOnInit();
  }
}
