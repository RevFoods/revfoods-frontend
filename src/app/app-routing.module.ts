import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./auth/login/login.component";
import { CustomerRegisterComponent } from "./components/customer/customer-register/customer-register.component";
import { ViewCartComponent } from "./components/customer/view-cart/view-cart.component";
import { ViewFoodCategoryComponent } from "./components/customer/view-food-category/view-food-category.component";
import { HomeComponent } from "./home/home/home.component";

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "register",
    component: CustomerRegisterComponent,
  },
  {
    path: "",
    component: HomeComponent,
    children: [
      {
        path: "categories",
        component: ViewFoodCategoryComponent,
      },
      {
        path: "cart",
        component: ViewCartComponent,
      },
      {
        path: "customer-orders", component: ViewFoodCategoryComponent
      },
    ],
    redirectTo: "",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
