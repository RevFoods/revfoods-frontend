import { Chef } from "./../../../model/chef";
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ChefService } from "src/app/service/chef.service";
import { Router } from "@angular/router";
import { interval } from "rxjs";
import { ToastrService } from "ngx-toastr";
@Component({
  selector: "app-update-chef",
  templateUrl: "./update-chef.component.html",
  styleUrls: ["./update-chef.component.css"],
})
export class UpdateChefComponent implements OnInit {
  constructor(private service: ChefService, private router: Router, private toaster: ToastrService) {}
  chef: Chef;
  ChefUpdateForm = new FormGroup({
    chefId: new FormControl("", [Validators.required]),
    chefName: new FormControl("", [Validators.required]),
    chefUsername: new FormControl("", [Validators.required]),
    chefPassword: new FormControl("", [Validators.required]),
  });
  ngOnInit() {
    this.service.getChefById(history.state.chefId).subscribe((res) => {
      this.chef = res;
      console.log(res);
      this.ChefUpdateForm.patchValue({
        chefId: res.chefId,
        chefName: res.chefName,
        chefUsername: res.chefUsername,
        chefPassword: res.chefPassword,
      });
    });
  }
  updateChef() {
    this.service.updateChef(this.ChefUpdateForm.value).subscribe((res) => {
      console.log(res);
      this.toaster.success(res.chefName +" is Updated.","Chef Updated Successfully!");
    });
    this.router.navigate(["/revfoods/manage-chef"]);
  }
}
