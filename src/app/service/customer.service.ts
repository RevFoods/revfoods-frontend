import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Customer } from "../model/customer";
import { Feedback } from "../model/feedback";
import { Help } from "../model/help";

@Injectable({
  providedIn: "root",
})
export class CustomerService {
  private url: string;

  constructor(private http: HttpClient) {
    this.url = "http://54.146.205.172:2020/customer";
  }

  public addCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.url, customer);
  }

  public updateCustomer(customer: Customer): Observable<Customer> {
    return this.http.put<Customer>(this.url, customer);
  }

  public getAllCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.url + "s");
  }

  public getCustomerById(customerId: number): Observable<Customer> {
    return this.http.get<Customer>(this.url + "/" + customerId);
  }

  public deleteCustomer(customerId: number) {
    return this.http.delete(this.url + "/" + customerId);
  }

  public addCustomerTableToCustomer(customerId: number): Observable<Customer> {
    return this.http.put<Customer>(this.url + "/" + customerId, customerId);
  }

  public getAllCustomersByOrderStatusId(
    orderStatusId: number
  ): Observable<Customer[]> {
    return this.http.get<Customer[]>(
      this.url + "s/orderStatus/" + orderStatusId
    );
  }

  public addFeedbackToCustomer(
    customerId: number,
    feedback: Feedback
  ): Observable<Customer> {
    return this.http.put<Customer>(
      this.url + "/" + customerId + "/feedback",
      feedback
    );
  }

  public addHelpToCustomer(
    customerId: number,
    help: Help
  ): Observable<Customer> {
    return this.http.put<Customer>(this.url + "/" + customerId + "/help", help);
  }
}
