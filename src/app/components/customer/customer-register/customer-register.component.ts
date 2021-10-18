import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { Customer } from "src/app/model/customer";
import { CustomerService } from "src/app/service/customer.service";

@Component({
  selector: "app-customer-register",
  templateUrl: "./customer-register.component.html",
  styleUrls: ["./customer-register.component.css"],
})
export class CustomerRegisterComponent implements OnInit {
  registerForm: FormGroup;
  customer: Customer;
  constructor(
    private router: Router,
    private toaster: ToastrService,
    private customerService: CustomerService
  ) {
    this.customer = new Customer();
    this.registerForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      phone: new FormControl(null, [
        Validators.required,
        Validators.minLength(10),
      ]),
    });
  }

  ngOnInit() {}

  register() {
    this.customer.customerName = this.registerForm.value.name;
    this.customer.customerEmail = this.registerForm.value.email;
    this.customer.customerPhone = this.registerForm.value.phone;
    this.customerService.addCustomer(this.customer).subscribe((res) => {
      this.customerService
        .addCustomerTableToCustomer(res.customerId)
        .subscribe((data) => {
          console.log(data);
          localStorage.setItem("customer", JSON.stringify(data));
        });
    });
    localStorage.setItem("isRegistered", "true");
    localStorage.setItem("role", "customer");
    this.toaster.success(
      "Please wait while redirecting...",
      "Register Successfull!"
    );
    this.router.navigate(["/revfoods/sub-home"]);
  }
}
