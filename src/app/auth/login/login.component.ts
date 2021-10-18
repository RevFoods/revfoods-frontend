import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { Chef } from "src/app/model/chef";
import { Supervisor } from "src/app/model/supervisor";
import { ChefService } from "src/app/service/chef.service";
import { SupervisorService } from "src/app/service/supervisor.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  supervisor: Supervisor = new Supervisor();
  chef: Chef = new Chef();

  constructor(
    private toaster: ToastrService,
    private router: Router,
    private supervisorService: SupervisorService,
    private chefService: ChefService
  ) {
    this.supervisor = new Supervisor();
    this.chef = new Chef();
    this.loginForm = new FormGroup({
      username: new FormControl("", Validators.required),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(3),
      ]),
      role: new FormControl(""),
    });
  }

  ngOnInit() {}

  login() {
    if (this.loginForm.value.role == "supervisor") {
      console.log(this.loginForm.value.username);
      console.log(this.loginForm.value.password);
      this.supervisor.supervisorUsername = this.loginForm.value.username;
      this.supervisor.supervisorPassword = this.loginForm.value.password;
      this.supervisorService
        .getSupervisorByUsernameAndPassword(this.supervisor)
        .subscribe(async (supervisorData: Supervisor) => {
          this.supervisor = supervisorData;
          if (supervisorData != null) {
            console.log(supervisorData);
            localStorage.setItem("isAuthenticated", "true");
            localStorage.setItem("role", this.loginForm.value.role);
            localStorage.setItem("supervisor", JSON.stringify(supervisorData));
            this.toaster.success(
              "Please wait while redirecting...",
              "Login Successful!"
            );
            this.router.navigate(["/revfoods"]);
          } else {
            this.ngOnInit();
            this.loginForm.patchValue({
              username: "",
              password: "",
            });
            this.toaster.error(
              "The username or password is incorrect.",
              "Invalid Login Credentials!"
            );
            this.router.navigate(["/home"]);
          }
        });
    } else if (this.loginForm.value.role == "chef") {
      this.chef.chefUsername = this.loginForm.value.username;
      this.chef.chefPassword = this.loginForm.value.password;
      this.chefService
        .getChefByUsernameAndPassword(this.chef)
        .subscribe(async (chefData: null) => {
          this.chef = chefData;
          if (chefData != null) {
            localStorage.setItem("isAuthenticated", "true");
            localStorage.setItem("role", this.loginForm.value.role);
            localStorage.setItem("chef", JSON.stringify(chefData));
            this.toaster.success(
              "Please wait while redirecting...",
              "Login Successful!"
            );
            this.router.navigate(["/revfoods"]);
          } else {
            this.ngOnInit();
            this.loginForm.patchValue({
              username: "",
              password: "",
            });
            this.toaster.error(
              "The username or password is incorrect.",
              "Invalid Login Credentials!"
            );
            this.router.navigate(["/home"]);
          }
        });
    } else if (this.loginForm.value.role == "admin") {
      if (
        this.loginForm.value.username == "admin" &&
        this.loginForm.value.password == "admin"
      ) {
        this.toaster.success("Admin Login", "Successfull!!!");
        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem("role", this.loginForm.value.role);
        this.toaster.success(
          "Please wait while redirecting...",
          "Login Successful!"
        );
        this.router.navigate(["/revfoods"]);
      } else {
        this.ngOnInit();
        this.loginForm.patchValue({
          username: "",
          password: "",
        });
        this.toaster.error(
          "The username or password is incorrect.",
          "Invalid Login Credentials!"
        );
        this.router.navigate(["/home"]);
      }
    } else {
      this.loginForm.patchValue({
        username: "",
        password: "",
      });
      this.toaster.error(
        "The username or password is incorrect.",
        "Invalid Login Credentials!"
      );
      this.router.navigate(["/home"]);
    }
  }
}
