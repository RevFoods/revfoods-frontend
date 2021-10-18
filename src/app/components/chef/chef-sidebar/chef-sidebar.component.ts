import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
@Component({
  selector: "app-chef-sidebar",
  templateUrl: "./chef-sidebar.component.html",
  styleUrls: ["./chef-sidebar.component.css"],
})
export class ChefSidebarComponent implements OnInit {
  constructor(private router: Router, private toaster: ToastrService) {}
  ngOnInit() {}
  signOut() {
    localStorage.removeItem("role");
    localStorage.removeItem("chef");
    localStorage.removeItem("isAuthenticated");
    this.router.navigate(["/home"]);
    this.toaster.success(
      "You have successfully logged out of the application.",
      "Logged Out Successfully!!"
    );
  }
}
