import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { Cart } from "src/app/model/cart";
import { Customer } from "src/app/model/customer";
import { Food } from "src/app/model/food";
import { CartService } from "src/app/service/cart.service";
import { CustomerService } from "src/app/service/customer.service";
import { FoodOrderService } from "src/app/service/food-order.service";
@Component({
  selector: "app-view-cart",
  templateUrl: "./view-cart.component.html",
  styleUrls: ["./view-cart.component.css"],
})
export class ViewCartComponent implements OnInit {
  cartList: Cart[];
  sum: number;
  id: number;
  prepTime: number;
  customer: Customer;
  cartTotal: number;
  constructor(
    private cartService: CartService,
    private foodOrderService: FoodOrderService,
    private toaster: ToastrService,
    private router: Router
  ) {
    this.sum = 0;
    this.prepTime = 0;
    this.cartTotal = 0;
  }
  ngOnInit() {
    this.customer = JSON.parse(localStorage.getItem("customer"));
    this.cartService
      .getAllCartsByCustomerId(this.customer.customerId)
      .subscribe((res) => {
        console.log(res);
        this.cartList = res;
        for (let i of this.cartList) {
          if (i.food.foodPrepTime > this.prepTime) {
            this.prepTime = i.food.foodPrepTime;
            this.prepTime += 20;
          }
          if (i.cartQuantity > 0 && i.food.foodPrice > 0) {
            this.sum += i.food.foodPrice * i.cartQuantity;
          }
        }
        this.cartTotal = res.length;
      });
  }
  public delete(cart: Cart) {
    this.cartService.deleteCart(cart.cartId).subscribe((res) => {
      this.toaster.success(
        cart.food.foodName + " is removed from cart.",
        "Removed Cart Item Successfully!"
      );
    });
    this.ngOnInit();
  }

  checkout() {
    for (let cart of this.cartList) {
      this.cartService.updateCartOrderedStatus(cart.cartId).subscribe((res) => {
        this.foodOrderService
          .addCartToFoodOrder(res.cartId)
          .subscribe((data) => {
            console.log(data);
            this.toaster.success(
              data.cart.food.foodName + " is ordred.",
              "Order Placed Successfully!!!"
            );
          });
      });
    }
    this.ngOnInit();
    this.router.navigate(["/revfoods/orders"]);
  }
}
