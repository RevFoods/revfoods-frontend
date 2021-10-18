import { Component, OnInit } from "@angular/core";
import { Router, RouterModule } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { Customer } from "src/app/model/customer";
import { Help } from "src/app/model/help";
import { CustomerService } from "src/app/service/customer.service";
import { HelpService } from "src/app/service/help.service";
@Component({
  selector: "app-help",
  templateUrl: "./help.component.html",
  styleUrls: ["./help.component.css"],
})
export class HelpComponent implements OnInit {
  help: Help;
  customer: Customer;
  constructor(
    public customerService: CustomerService,
    public helpService: HelpService,
    public router: Router,
    private toastr: ToastrService
  ) {
    this.help = new Help();
  }
  ngOnInit() {
    this.customer = JSON.parse(localStorage.getItem("customer"));
  }
  addHelp() {
    console.log(this.help);
    this.helpService.addHelp(this.help).subscribe((res) => {
      this.customerService
        .addHelpToCustomer(this.customer.customerId, res)
        .subscribe((data) => {
          console.log(data);
          this.toastr.success(
            "We Will Help You As Soon As Possible",
            "Help raised successfully!"
          );
          this.router.navigate(["/revfoods/sub-home"]);
        });
    });
  }
}
