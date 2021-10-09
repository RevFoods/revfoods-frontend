import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AdminService } from "./service/admin.service";
import { FeedbackService } from "./service/feedback.service";
import { FoodCategoryService } from "./service/food-category.service";
import { FoodOrderService } from "./service/food-order.service";
import { FoodService } from "./service/food.service";
import { OrderStatusService } from "./service/order-status.service";
import { ChefService } from "./service/chef.service";
import { SupervisorService } from "./service/supervisor.service";
import { CustomerService } from "./service/customer.service";
import { CustomerTableService } from "./service/customer-table.service";
import { CartService } from "./service/cart.service";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [
    AdminService,
    FeedbackService,
    FoodCategoryService,
    FoodOrderService,
    FoodService,
    OrderStatusService,
    ChefService,
    SupervisorService,
    CustomerService,
    CustomerTableService,
    CartService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
