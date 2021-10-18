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
import { CustomerSidebarComponent } from "./components/customer/customer-sidebar/customer-sidebar.component";
import { LoginComponent } from "./auth/login/login.component";
import { HeaderComponent } from "./components/header/header.component";
import { CustomerRegisterComponent } from "./components/customer/customer-register/customer-register.component";
import { ViewFoodCategoryComponent } from "./components/customer/view-food-category/view-food-category.component";
import { ViewCartComponent } from "./components/customer/view-cart/view-cart.component";
import { ViewCustomerOrdersComponent } from "./components/customer/view-customer-orders/view-customer-orders.component";
import { HelpComponent } from "./components/customer/help/help.component";
import { FeedbackComponent } from "./components/customer/feedback/feedback.component";
import { BillComponent } from "./components/customer/bill/bill.component";
import { PaymentComponent } from "./components/customer/payment/payment.component";
import { ChefDashboardComponent } from "./components/chef/chef-dashboard/chef-dashboard.component";
import { ViewOrdersComponent } from "./components/chef/view-orders/view-orders.component";
import { OrderCancellationRequestComponent } from "./components/chef/order-cancellation-request/order-cancellation-request.component";
import { ChefSidebarComponent } from "./components/chef/chef-sidebar/chef-sidebar.component";
import { SupervisorDashboardComponent } from "./components/supervisor/supervisor-dashboard/supervisor-dashboard.component";
import { AcceptedOrdersComponent } from "./components/supervisor/accepted-orders/accepted-orders.component";
import { ServedOrdersComponent } from "./components/supervisor/served-orders/served-orders.component";
import { PendingBillsComponent } from "./components/supervisor/pending-bills/pending-bills.component";
import { ViewUnoccupiedTablesComponent } from "./components/supervisor/view-unoccupied-tables/view-unoccupied-tables.component";
import { CustomerHelpsComponent } from "./components/supervisor/customer-helps/customer-helps.component";
import { SupervisorSidebarComponent } from "./components/supervisor/supervisor-sidebar/supervisor-sidebar.component";
import { AdminSidebarComponent } from "./components/admin/admin-sidebar/admin-sidebar.component";
import { AddChefComponent } from "./components/admin/add-chef/add-chef.component";
import { UpdateChefComponent } from "./components/admin/update-chef/update-chef.component";
import { ManageChefComponent } from "./components/admin/manage-chef/manage-chef.component";
import { AddSupervisorComponent } from "./components/admin/add-supervisor/add-supervisor.component";
import { UpdateSupervisorComponent } from "./components/admin/update-supervisor/update-supervisor.component";
import { ManageSupervisorComponent } from "./components/admin/manage-supervisor/manage-supervisor.component";
import { AddFoodComponent } from "./components/admin/add-food/add-food.component";
import { UpdateFoodComponent } from "./components/admin/update-food/update-food.component";
import { ManageFoodComponent } from "./components/admin/manage-food/manage-food.component";
import { AddFoodCategoryComponent } from "./components/admin/add-food-category/add-food-category.component";
import { UpdateFoodCategoryComponent } from "./components/admin/update-food-category/update-food-category.component";
import { ManageFoodCategoryComponent } from "./components/admin/manage-food-category/manage-food-category.component";
import { HomeComponent } from "./home/home/home.component";
import { TotalFoodOrderPricePipe } from "./components/supervisor/total-food-order-price.pipe";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RevfoodsComponent } from "./components/revfoods/revfoods.component";
import { FoodStatusPipe } from "./components/admin/food-status.pipe";
import { ToastrModule } from "ngx-toastr";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SubHomeComponent } from './home/sub-home/sub-home.component';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomerSidebarComponent,
    LoginComponent,
    HeaderComponent,
    CustomerRegisterComponent,
    ViewFoodCategoryComponent,
    ViewCartComponent,
    ViewCustomerOrdersComponent,
    HelpComponent,
    FeedbackComponent,
    BillComponent,
    PaymentComponent,
    ChefDashboardComponent,
    ViewOrdersComponent,
    OrderCancellationRequestComponent,
    ChefSidebarComponent,
    SupervisorDashboardComponent,
    AcceptedOrdersComponent,
    ServedOrdersComponent,
    PendingBillsComponent,
    ViewUnoccupiedTablesComponent,
    CustomerHelpsComponent,
    SupervisorSidebarComponent,
    AdminSidebarComponent,
    AddChefComponent,
    UpdateChefComponent,
    ManageChefComponent,
    AddSupervisorComponent,
    UpdateSupervisorComponent,
    ManageSupervisorComponent,
    AddFoodComponent,
    UpdateFoodComponent,
    ManageFoodComponent,
    AddFoodCategoryComponent,
    UpdateFoodCategoryComponent,
    ManageFoodCategoryComponent,
    HomeComponent,
    TotalFoodOrderPricePipe,
    RevfoodsComponent,
    FoodStatusPipe,
    SubHomeComponent,
    AdminDashboardComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
  ],
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
