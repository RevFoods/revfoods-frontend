import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderStatus } from '../model/order-status';

@Injectable({
  providedIn: 'root'
})
export class OrderStatusService {
  private url:string;

  constructor(private http:HttpClient) {
    this.url="http://localhost:2020/orderStatus";
   }

   public addOrderStatus(orderStatus:OrderStatus):Observable<OrderStatus>{
     return this.http.post<OrderStatus>(this.url,orderStatus);
   }

   public updateOrderStatus(orderStatus:OrderStatus):Observable<OrderStatus>{
     return this.http.put<OrderStatus>(this.url,orderStatus);
   }

   public getAllOrderStatuses():Observable<OrderStatus[]>{
     return this.http.get<OrderStatus[]>(this.url+"es");
   }

   public getOrderStatusById(orderStatusId:number):Observable<OrderStatus>{
    return this.http.get<OrderStatus>(this.url+"/"+orderStatusId);
   }

   public deleteOrderStatus(orderStatusId:number){
     return this.http.delete(this.url+"/"+orderStatusId);
   }
 
  }

