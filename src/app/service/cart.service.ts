import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Cart } from "../model/cart";
import { FoodOrder } from "../model/food-order";

@Injectable({
  providedIn: "root",
})
export class CartService {
  private url: string;

  constructor(private http: HttpClient) {
    this.url = "http://54.146.205.172:2020/cart";
  }

  public addCart(cart: Cart): Observable<Cart> {
    return this.http.post<Cart>(this.url, cart);
  }

  public updateCart(cart: Cart): Observable<Cart> {
    return this.http.put<Cart>(this.url, cart);
  }

  public getAllCarts(): Observable<Cart[]> {
    return this.http.get<Cart[]>(this.url + "s");
  }

  public getCartByCartId(cartId: number): Observable<Cart> {
    return this.http.get<Cart>(this.url + "/" + cartId);
  }

  public deleteCart(cartId: number) {
    return this.http.delete(this.url + "/" + cartId);
  }

  public addFoodAndCustomerToCart(
    foodId: number,
    customerId: number,
    cartQuantity: number
  ): Observable<Cart> {
    return this.http.post<Cart>(
      this.url +
        "/customer/" +
        customerId +
        "/food/" +
        foodId +
        "/cartQuantity/" +
        cartQuantity,
      foodId
    );
  }

  public getAllCartsByCustomerId(customerId: number): Observable<Cart[]> {
    return this.http.get<Cart[]>(this.url + "/customer/" + customerId);
  }

  public updateCartOrderedStatus(cartId: number): Observable<Cart> {
    return this.http.put<Cart>(
      this.url + "/" + cartId + "/cartOrderedStatus/true",
      cartId
    );
  }
}
