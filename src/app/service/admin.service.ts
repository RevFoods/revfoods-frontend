import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Admin } from "../model/admin";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AdminService {
  private url: string;

  constructor(private http: HttpClient) {
    this.url = "http://localhost:2020/admin";
  }

  public addAdmin(admin: Admin): Observable<Admin> {
    return this.http.post<Admin>(this.url, admin);
  }

  public deleteAdmin(adminId: number) {
    return this.http.delete(this.url + "/" + adminId);
  }

  public updateAdmin(admin: Admin): Observable<Admin> {
    return this.http.put<Admin>(this.url, admin);
  }

  public getAllAdmins(): Observable<Admin[]> {
    return this.http.get<Admin[]>(this.url + "s");
  }

  public getAdminById(adminId: number): Observable<Admin> {
    return this.http.get<Admin>(this.url + "/" + adminId);
  }
}
