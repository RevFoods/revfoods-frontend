import { Component, OnInit } from "@angular/core";
import { FoodOrderService } from "src/app/service/food-order.service";
import { HelpService } from "src/app/service/help.service";
@Component({
  selector: "app-supervisor-dashboard",
  templateUrl: "./supervisor-dashboard.component.html",
  styleUrls: ["./supervisor-dashboard.component.css"],
})
export class SupervisorDashboardComponent implements OnInit {
  totalAcceptedOrders: number;
  totalServedOrders: number;
  totalCustomerHelp: number;
  totalPendingBills: number;
  constructor(
    private foodOrderService: FoodOrderService,
    private helpService: HelpService
  ) {}
  ngOnInit() {
    this.foodOrderService
      .getAllFoodOrdersByOrderStatusId(3)
      .subscribe((res) => {
        this.totalServedOrders = res.length;
      });

    this.foodOrderService
      .getAllFoodOrdersByOrderStatusId(2)
      .subscribe((res) => {
        this.totalAcceptedOrders = res.length;
      });

    this.foodOrderService
      .getAllFoodOrdersByOrderStatusId(7)
      .subscribe((res) => {
        this.totalPendingBills = res.length;
      });

    this.helpService.getAllHelps().subscribe((res) => {
      this.totalCustomerHelp = res.length;
    });
  }
}
