import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { FoodOrder } from "../model/food-order";

@Injectable({
  providedIn: "root",
})
export class FoodOrderService {
  url: string;

  constructor(private http: HttpClient) {
    this.url = "http://localhost:2020/foodOrder";
  }

  public addFoodOrder(foodOrder: FoodOrder): Observable<FoodOrder> {
    return this.http.post<FoodOrder>(this.url, foodOrder);
  }

  public updateFoodOrder(foodOrder: FoodOrder): Observable<FoodOrder> {
    return this.http.put<FoodOrder>(this.url, foodOrder);
  }

  public deleteFoodOrder(foodOrderId: number) {
    return this.http.delete(this.url + "/" + foodOrderId);
  }

  public getFoodOrderById(foodOrderId: number): Observable<FoodOrder> {
    return this.http.get<FoodOrder>(this.url + "/" + foodOrderId);
  }

  public getAllFoodOrders(): Observable<FoodOrder[]> {
    return this.http.get<FoodOrder[]>(this.url + "s");
  }

  public addCartToFoodOrder(cartId: number): Observable<FoodOrder> {
    return this.http.post<FoodOrder>(this.url + "/cart/" + cartId, cartId);
  }

  public getFoodOrdersByCustomerId(
    customerId: number
  ): Observable<FoodOrder[]> {
    return this.http.get<FoodOrder[]>(this.url + "s/customer/" + customerId);
  }

  public updateFoodOrderStatus(
    foodOrderId: number,
    orderStatusId: number
  ): Observable<FoodOrder> {
    return this.http.put<FoodOrder>(
      this.url + "/" + foodOrderId + "/orderStatus/" + orderStatusId,
      foodOrderId
    );
  }

  public getAllFoodOrdersByOrderStatusId(
    orderStatusId: number
  ): Observable<FoodOrder[]> {
    return this.http.get<FoodOrder[]>(
      this.url + "s/orderStatus/" + orderStatusId
    );
  }

  public getAllFoodOrdersForChef(): Observable<FoodOrder[]> {
    return this.http.get<FoodOrder[]>(this.url + "s/chef");
  }
}
