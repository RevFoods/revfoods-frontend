import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from './../model/order';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  url: string;
  constructor(private http: HttpClient) {
    this.url = "http://localhost:2020";
  }
  public addOrder( order:Order) : Observable<Order>{
    return this.http.post<Order>(this.url + "",order);
  }
  public updateorder(order :Order): Observable<Order> {
    return this.http.put<Order>(this.url + "/updateorder", order);
  }
  public deleteOrder(orderId: number){
    return this.http.delete(this.url + "/deleteOrder"+orderId);
  }
  public getOrderById(orderId: number) :Observable<Order> {
    return this.http.get<Order>(this.url + "/getOrderById"+orderId);
  }

  public getAllOrders(): Observable<Order[]>{
    return this.http.get<Order[]>(this.url+"/getallOrders")
  }
  
}
