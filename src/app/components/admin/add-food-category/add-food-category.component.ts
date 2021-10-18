import { FoodCategoryService } from "./../../../service/food-category.service";
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
@Component({
  selector: "app-add-food-category",
  templateUrl: "./add-food-category.component.html",
  styleUrls: ["./add-food-category.component.css"],
})
export class AddFoodCategoryComponent implements OnInit {
  constructor(
    private foodCategoryService: FoodCategoryService,
    private router: Router,
    private toaster: ToastrService
  ) {}
  AddFoodCategoryForm = new FormGroup({
    foodCategoryName: new FormControl("", [Validators.required]),
    foodCategoryAvatar: new FormControl("", [Validators.required]),
    foodCategoryDescription: new FormControl("", [Validators.required]),
  });
  ngOnInit() {}
  addFoodCategory() {
    console.log(this.AddFoodCategoryForm.value);
    this.foodCategoryService
      .addFoodCategory(this.AddFoodCategoryForm.value)
      .subscribe((res) => {
        console.log(res);
        this.toaster.success(
          res.foodCategoryName + " is Added.",
          "Food Category Added Successfully!"
        );
      });
    this.router.navigate(["/revfoods/manage-food-category"]);
  }
}
