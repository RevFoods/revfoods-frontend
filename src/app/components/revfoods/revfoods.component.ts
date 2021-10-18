import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { FoodCategory } from "src/app/model/food-category";
import { FoodCategoryService } from "src/app/service/food-category.service";

@Component({
  selector: "app-revfoods",
  templateUrl: "./revfoods.component.html",
  styleUrls: ["./revfoods.component.css"],
})
export class RevfoodsComponent implements OnInit {
  private foodCategoryList: FoodCategory[];
  private isAuthenticated: string;
  isCustomer: boolean;
  isSupervisor: boolean;
  isChef: boolean;
  isAdmin: boolean;
  constructor(
    private foodCategoryService: FoodCategoryService,
    private router: Router,
    private toasterService: ToastrService
  ) {}
  ngOnInit() {
    this.foodCategoryService.getAllFoodCategories().subscribe((res) => {
      this.foodCategoryList = res;
      console.log(this.foodCategoryList);
    });
    const role = localStorage.getItem("role");
    if (role == "customer") {
      this.isCustomer = true;
    }
    if (role == "supervisor") {
      this.isSupervisor = true;
    }
    if (role == "chef") {
      this.isChef = true;
    }
    if (role == "admin") {
      this.isAdmin = true;
    }
  }

  showFoodByCategory(foodCategoryId: number) {
    this.isAuthenticated = localStorage.getItem("isAuthenticated");
    if (this.isAuthenticated != "true") {
      this.toasterService.warning("Register To Place Order", "Register Now!!!");
      this.router.navigate(["./login"]);
    } else {
      this.router.navigateByUrl("./categories", {
        state: { foodCategoryId: foodCategoryId },
      });
    }
  }
}
