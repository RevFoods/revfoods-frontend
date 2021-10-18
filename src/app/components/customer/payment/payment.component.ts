import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { FoodOrder } from "src/app/model/food-order";
import { FoodOrderService } from "src/app/service/food-order.service";
import * as html2pdf from "html2pdf.js";
import { Customer } from "src/app/model/customer";

@Component({
  selector: "app-payment",
  templateUrl: "./payment.component.html",
  styleUrls: ["./payment.component.css"],
})
export class PaymentComponent implements OnInit {
  strikeCheckout: any = null;
  totalAmount: number;
  foodOrderList: FoodOrder[];
  price: number;
  customer: Customer;
  Date = new Date();

  constructor(
    private foodOrderService: FoodOrderService,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.price = 0;
  }

  ngOnInit() {
    this.customer = JSON.parse(localStorage.getItem("customer"));
    this.stripePaymentGateway();
    this.totalAmount = history.state.totalAmount;
    this.foodOrderService
      .getFoodOrdersByCustomerId(this.customer.customerId)
      .subscribe((res) => {
        this.foodOrderList = res;

        for (let foodOrder of this.foodOrderList) {
          if (
            foodOrder.cart.food.foodPrice > 0 &&
            foodOrder.cart.cartQuantity > 0 &&
            !(
              foodOrder.orderStatus.orderStatus == "Unavaliable" ||
              foodOrder.orderStatus.orderStatus == "Cancelled"
            )
          ) {
            this.price +=
              foodOrder.cart.food.foodPrice * foodOrder.cart.cartQuantity;
            console.log(foodOrder.orderStatus);
          }
        }
      });
  }

  checkout(amount) {
    const strikeCheckout = (<any>window).StripeCheckout.configure({
      key: "pk_test_51JlDWGSBFTbOTzwcakfqQEiMRZWTJkrZaI7pCqATKr4EVVm8nOP6LBbs4Ng7K2zX8b0rMw2oqxu9z3pKE0AMqpM000QL07VCCm",
      locale: "auto",
      token: function (stripeToken: any) {
        console.log(stripeToken);
      },
    });

    strikeCheckout.open({
      name: "RemoteStack",
      description: "Payment widgets",
      amount: amount * 100,
    });

    for (let foodOrder of this.foodOrderList) {
      this.foodOrderService
        .updateFoodOrderStatus(foodOrder.foodOrderId, 8)
        .subscribe((res) => {
          console.log(res);
        });
    }
  }

  stripePaymentGateway() {
    if (!window.document.getElementById("stripe-script")) {
      const scr = window.document.createElement("script");
      scr.id = "stripe-script";
      scr.type = "text/javascript";
      scr.src = "https://checkout.stripe.com/checkout.js";

      scr.onload = () => {
        this.strikeCheckout = (<any>window).StripeCheckout.configure({
          key: "pk_test_51JlDWGSBFTbOTzwcakfqQEiMRZWTJkrZaI7pCqATKr4EVVm8nOP6LBbs4Ng7K2zX8b0rMw2oqxu9z3pKE0AMqpM000QL07VCCm",
          locale: "auto",
          token: function (token: any) {
            console.log(token);
          },
        });
      };
      window.document.body.appendChild(scr);
    }
  }

  genratePDF() {
    const options = {
      filename: "revfoods-invoice.pdf",
      image: { type: "wepg" },
      html2pdf: {},
      jsPDF: { orientation: "landscape" },
    };
    const content: Element = document.getElementById("content");
    html2pdf().from(content).set(options).save();
    this.toastr.success("", "Invoice Generated Successfully!!!");
    this.router.navigate(["/revfoods/feedback"]);
  }
}
