import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-supervisor-sidebar",
  templateUrl: "./supervisor-sidebar.component.html",
  styleUrls: ["./supervisor-sidebar.component.css"],
})
export class SupervisorSidebarComponent implements OnInit {
  constructor(private router: Router, private toaster: ToastrService) {}

  ngOnInit() {}

  signOut() {
    localStorage.removeItem("role");
    localStorage.removeItem("supervisor");
    localStorage.removeItem("isAuthenticated");
    this.router.navigate(["/home"]);
    this.toaster.success(
      "You have successfully logged out of the application.",
      "Logged Out Successfully!!"
    );
  }
}
