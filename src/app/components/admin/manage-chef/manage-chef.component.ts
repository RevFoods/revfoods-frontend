import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { interval, timer } from "rxjs";
import { Chef } from "src/app/model/chef";
import { ChefService } from "src/app/service/chef.service";
@Component({
  selector: "app-manage-chef",
  templateUrl: "./manage-chef.component.html",
  styleUrls: ["./manage-chef.component.css"],
})
export class ManageChefComponent implements OnInit {
  chefs: Chef[];
  constructor(private chefService: ChefService, private router: Router, private toaster: ToastrService) {}

  ngOnInit() {
    this.chefService.getAllChefs().subscribe((res) => {
      this.chefs = res;
    });
  }
  delete(chefId: number) {
    this.chefService.deleteChef(chefId).subscribe();
    
    this.toaster.success("","Chef Deleted Successfully!");
    this.ngOnInit();
  }
  update(chefId: number) {
    this.router.navigateByUrl("/revfoods/update-chef", {
      state: { chefId: chefId },
    });
  }
}
