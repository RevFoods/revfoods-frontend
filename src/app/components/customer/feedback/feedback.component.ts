import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { Customer } from "src/app/model/customer";
import { Feedback } from "src/app/model/feedback";
import { CustomerTableService } from "src/app/service/customer-table.service";
import { FeedbackService } from "src/app/service/feedback.service";
@Component({
  selector: "app-feedback",
  templateUrl: "./feedback.component.html",
  styleUrls: ["./feedback.component.css"],
})
export class FeedbackComponent implements OnInit {
  feedback: Feedback;
  customer: Customer;
  feedback1: Feedback[];
  constructor(
    private toastr: ToastrService,
    private router: Router,
    private customerTableService: CustomerTableService
  ) {
    this.feedback = new Feedback();
  }
  ngOnInit() {}

  addFeddback() {
    this.customer = JSON.parse(localStorage.getItem("customer"));
    this.toastr.success("Feedback submitted successfully.", "Thank you!");
    localStorage.removeItem("role");
    localStorage.removeItem("customer");
    localStorage.removeItem("isRegistered");
    this.toastr.success(
      "You have successfully logged out of the application.",
      "Logged Out Successfully!!"
    );

    this.customer.customerTable.customerTableStatus = false;
    this.customerTableService
      .updateCustomerTable(this.customer.customerTable)
      .subscribe((res) => {
        console.log(res);
      });
    this.router.navigate(["/home"]);
  }
}
