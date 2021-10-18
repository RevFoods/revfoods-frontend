import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { FoodCategory } from "src/app/model/food-category";
import { FoodCategoryService } from "src/app/service/food-category.service";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  private foodCategoryList: FoodCategory[];
  private isRegistered: string;
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
  }

  showFoodByCategory(foodCategoryId: number) {
    this.isRegistered = localStorage.getItem("isRegistered");
    if (this.isRegistered != "true") {
      this.toasterService.info("Register To Place Order", "Register Now!!!");
      this.router.navigate(["/register"]);
    } else {
      this.router.navigateByUrl("/revfoods/categories", {
        state: { foodCategoryId: foodCategoryId },
      });
    }
  }
}
