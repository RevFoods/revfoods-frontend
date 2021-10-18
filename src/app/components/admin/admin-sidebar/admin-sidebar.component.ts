import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-admin-sidebar",
  templateUrl: "./admin-sidebar.component.html",
  styleUrls: ["./admin-sidebar.component.css"],
})
export class AdminSidebarComponent implements OnInit {
  constructor(private router: Router, private toaster: ToastrService) {}

  ngOnInit() {}

  signOut() {
    localStorage.removeItem("role");
    localStorage.removeItem("admin");
    localStorage.removeItem("isAuthenticated");
    this.router.navigate(["/home"]);
    this.toaster.success(
      "You have successfully logged out of the application.",
      "Logged Out Successfully!!"
    );
  }
}
