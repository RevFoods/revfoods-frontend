import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-customer-sidebar",
  templateUrl: "./customer-sidebar.component.html",
  styleUrls: ["./customer-sidebar.component.css"],
})
export class CustomerSidebarComponent implements OnInit {
  constructor(private router: Router, private toaster: ToastrService) {}

  ngOnInit() {}

  logOut() {
    localStorage.removeItem("role");
    localStorage.removeItem("customer");
    localStorage.removeItem("isRegistered");
    this.router.navigate(["/home"]);
    this.toaster.success(
      "You have successfully logged out of the application.",
      "Logged Out Successfully!!"
    );
  }
}
