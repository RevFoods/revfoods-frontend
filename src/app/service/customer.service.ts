import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Customer } from "../model/customer";

@Injectable({
  providedIn: "root",
})
export class CustomerService {
  private url: string;

  constructor(private http: HttpClient) {
    this.url = "http://localhost:2020/customer";
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
}
