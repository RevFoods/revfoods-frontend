import { Table } from "../model/table";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class TableService {
  private url: string;

  constructor(private http: HttpClient) {
    this.url = "http://localhost:2020/table";
  }

  public addTable(table: Table): Observable<Table> {
    return this.http.post<Table>(this.url, table);
  }

  public deleteTable(tableId: number) {
    return this.http.delete(this.url + "/" + tableId);
  }

  public updateTable(table: Table): Observable<Table> {
    return this.http.put<Table>(this.url, table);
  }

  public getAllTables(): Observable<Table[]> {
    return this.http.get<Table[]>(this.url + "s");
  }

  public getTableById(tableId: number): Observable<Table> {
    return this.http.get<Table>(this.url + "/" + tableId);
  }
}
