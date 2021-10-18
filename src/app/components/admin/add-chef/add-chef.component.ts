import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { Chef } from "src/app/model/chef";
import { ChefService } from "src/app/service/chef.service";
@Component({
  selector: "app-add-chef",
  templateUrl: "./add-chef.component.html",
  styleUrls: ["./add-chef.component.css"],
})
export class AddChefComponent implements OnInit {
  constructor(
    private chefService: ChefService,
    private router: Router,
    private toaster: ToastrService
  ) {}
  AddChefForm = new FormGroup({
    chefName: new FormControl("", [Validators.required]),
    chefUsername: new FormControl("", [Validators.required]),
    chefPassword: new FormControl("", [Validators.required]),
  });
  ngOnInit() {}
  addChef() {
    this.chefService.addChef(this.AddChefForm.value).subscribe((res) => {
      console.log(res);
      this.toaster.success(
        res.chefName + " is Added.",
        "Chef Added Successfully!"
      );
    });

    this.router.navigate(["/revfoods/manage-chef"]);
  }
}
