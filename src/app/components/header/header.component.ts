import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { Chef } from "src/app/model/chef";
import { Customer } from "src/app/model/customer";
import { Supervisor } from "src/app/model/supervisor";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  isCustomer: boolean;
  isSupervisor: boolean;
  isChef: boolean;
  isAdmin: boolean;
  customer: Customer;
  chef: Chef;
  supervisor: Supervisor;

  constructor(private router: Router, private toasterService: ToastrService) {}

  ngOnInit() {
    this.customer = JSON.parse(localStorage.getItem("customer"));
    this.chef = JSON.parse(localStorage.getItem("customer"));
    this.supervisor = JSON.parse(localStorage.getItem("customer"));
    const role = localStorage.getItem("role");
    if (role == "customer") {
      this.router.navigate(["/revfoods/sub-home"]);
      this.isCustomer = true;
    }
    if (role == "supervisor") {
      this.router.navigate(["/revfoods/supervisor"]);
      this.isSupervisor = true;
    }
    if (role == "chef") {
      this.router.navigate(["/revfoods/chef"]);
      this.isChef = true;
    }
    if (role == "admin") {
      this.router.navigate(["/revfoods/admin"]);
      this.isAdmin = true;
    }
  }

  customerLogout() {
    localStorage.removeItem("role");
    localStorage.removeItem("customer");
    localStorage.removeItem("isAuthenticated");
    this.router.navigate(["/home"]);
    this.toasterService.success(
      "You have successfully logged out of the application.",
      "Logged Out Successfully!!"
    );
  }

  adminLogout() {
    localStorage.removeItem("role");
    localStorage.removeItem("admin");
    localStorage.removeItem("isAuthenticated");
    this.router.navigate(["/home"]);
    this.toasterService.success(
      "You have successfully logged out of the application.",
      "Logged Out Successfully!!"
    );
  }

  supervisorLogout() {
    localStorage.removeItem("role");
    localStorage.removeItem("supervisor");
    localStorage.removeItem("isAuthenticated");
    this.router.navigate(["/home"]);
    this.toasterService.success(
      "You have successfully logged out of the application.",
      "Logged Out Successfully!!"
    );
  }

  chefLogout() {
    localStorage.removeItem("role");
    localStorage.removeItem("chef");
    localStorage.removeItem("isAuthenticated");
    this.router.navigate(["/home"]);
    this.toasterService.success(
      "You have successfully logged out of the application.",
      "Logged Out Successfully!!"
    );
  }
}
