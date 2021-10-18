import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./auth/login/login.component";
import { AddChefComponent } from "./components/admin/add-chef/add-chef.component";
import { AddFoodCategoryComponent } from "./components/admin/add-food-category/add-food-category.component";
import { AddFoodComponent } from "./components/admin/add-food/add-food.component";
import { AddSupervisorComponent } from "./components/admin/add-supervisor/add-supervisor.component";
import { AdminDashboardComponent } from "./components/admin/admin-dashboard/admin-dashboard.component";
import { AdminSidebarComponent } from "./components/admin/admin-sidebar/admin-sidebar.component";
import { ManageChefComponent } from "./components/admin/manage-chef/manage-chef.component";
import { ManageFoodCategoryComponent } from "./components/admin/manage-food-category/manage-food-category.component";
import { ManageFoodComponent } from "./components/admin/manage-food/manage-food.component";
import { ManageSupervisorComponent } from "./components/admin/manage-supervisor/manage-supervisor.component";
import { UpdateChefComponent } from "./components/admin/update-chef/update-chef.component";
import { UpdateFoodCategoryComponent } from "./components/admin/update-food-category/update-food-category.component";
import { UpdateFoodComponent } from "./components/admin/update-food/update-food.component";
import { UpdateSupervisorComponent } from "./components/admin/update-supervisor/update-supervisor.component";
import { ChefDashboardComponent } from "./components/chef/chef-dashboard/chef-dashboard.component";
import { OrderCancellationRequestComponent } from "./components/chef/order-cancellation-request/order-cancellation-request.component";
import { ViewOrdersComponent } from "./components/chef/view-orders/view-orders.component";
import { BillComponent } from "./components/customer/bill/bill.component";
import { CustomerRegisterComponent } from "./components/customer/customer-register/customer-register.component";
import { CustomerSidebarComponent } from "./components/customer/customer-sidebar/customer-sidebar.component";
import { FeedbackComponent } from "./components/customer/feedback/feedback.component";
import { HelpComponent } from "./components/customer/help/help.component";
import { PaymentComponent } from "./components/customer/payment/payment.component";
import { ViewCartComponent } from "./components/customer/view-cart/view-cart.component";
import { ViewCustomerOrdersComponent } from "./components/customer/view-customer-orders/view-customer-orders.component";
import { ViewFoodCategoryComponent } from "./components/customer/view-food-category/view-food-category.component";
import { RevfoodsComponent } from "./components/revfoods/revfoods.component";
import { AcceptedOrdersComponent } from "./components/supervisor/accepted-orders/accepted-orders.component";
import { CustomerHelpsComponent } from "./components/supervisor/customer-helps/customer-helps.component";
import { PendingBillsComponent } from "./components/supervisor/pending-bills/pending-bills.component";
import { ServedOrdersComponent } from "./components/supervisor/served-orders/served-orders.component";
import { SupervisorDashboardComponent } from "./components/supervisor/supervisor-dashboard/supervisor-dashboard.component";
import { ViewUnoccupiedTablesComponent } from "./components/supervisor/view-unoccupied-tables/view-unoccupied-tables.component";
import { HomeComponent } from "./home/home/home.component";
import { SubHomeComponent } from "./home/sub-home/sub-home.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "sub-home",
  },
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "register",
    component: CustomerRegisterComponent,
  },
  {
    path: "revfoods",
    component: RevfoodsComponent,
    children: [
      {
        path: "sub-home",
        component: SubHomeComponent,
      },
      {
        path: "admin",
        component: AdminDashboardComponent,
      },
      {
        path: "customer",
        component: CustomerSidebarComponent,
      },

      {
        path: "add-chef",
        component: AddChefComponent,
      },
      {
        path: "update-chef",
        component: UpdateChefComponent,
      },
      {
        path: "manage-chef",
        component: ManageChefComponent,
      },
      {
        path: "add-supervisor",
        component: AddSupervisorComponent,
      },
      {
        path: "update-supervisor",
        component: UpdateSupervisorComponent,
      },
      {
        path: "manage-supervisor",
        component: ManageSupervisorComponent,
      },
      {
        path: "add-food",
        component: AddFoodComponent,
      },
      {
        path: "update-food",
        component: UpdateFoodComponent,
      },
      {
        path: "manage-food",
        component: ManageFoodComponent,
      },
      {
        path: "add-food-category",
        component: AddFoodCategoryComponent,
      },
      {
        path: "update-food-category",
        component: UpdateFoodCategoryComponent,
      },
      {
        path: "manage-food-category",
        component: ManageFoodCategoryComponent,
      },
      {
        path: "categories",
        component: ViewFoodCategoryComponent,
      },
      {
        path: "cart",
        component: ViewCartComponent,
      },
      {
        path: "customer-orders",
        component: ViewCustomerOrdersComponent,
      },
      {
        path: "help",
        component: HelpComponent,
      },
      {
        path: "feedback",
        component: FeedbackComponent,
      },
      {
        path: "bill",
        component: BillComponent,
      },
      {
        path: "payment",
        component: PaymentComponent,
      },
      {
        path: "orders",
        component: ViewOrdersComponent,
      },
      {
        path: "request-cancellation",
        component: OrderCancellationRequestComponent,
      },
      {
        path: "chef",
        component: ChefDashboardComponent,
      },
      {
        path: "supervisor",
        component: SupervisorDashboardComponent,
      },
      {
        path: "accepted-orders",
        component: AcceptedOrdersComponent,
      },
      {
        path: "served-orders",
        component: ServedOrdersComponent,
      },
      {
        path: "pending-bills",
        component: PendingBillsComponent,
      },
      {
        path: "tables",
        component: ViewUnoccupiedTablesComponent,
      },
      {
        path: "customer-help",
        component: CustomerHelpsComponent,
      },
      {
        path: "admin-sidebar",
        component: AdminSidebarComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
