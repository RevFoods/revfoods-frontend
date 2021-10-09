import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { CustomerTable } from "../model/customer-table";

@Injectable({
  providedIn: "root",
})
export class CustomerTableService {
  private url: string;

  constructor(private http: HttpClient) {
    this.url = "http://localhost:2020/customerTable";
  }

  public addcustomerTable(
    customerTable: CustomerTable
  ): Observable<CustomerTable> {
    return this.http.post<CustomerTable>(this.url, customerTable);
  }

  public deletecustomerTable(customerTableId: number) {
    return this.http.delete(this.url + "/" + customerTableId);
  }

  public updatecustomerTable(
    customerTable: CustomerTable
  ): Observable<CustomerTable> {
    return this.http.put<CustomerTable>(this.url, customerTable);
  }

  public getAllcustomerTables(): Observable<CustomerTable[]> {
    return this.http.get<CustomerTable[]>(this.url + "s");
  }

  public getcustomerTableById(
    customerTableId: number
  ): Observable<CustomerTable> {
    return this.http.get<CustomerTable>(this.url + "/" + customerTableId);
  }
}
