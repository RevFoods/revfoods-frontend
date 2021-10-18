import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Chef } from "../model/chef";

@Injectable({
  providedIn: "root",
})
export class ChefService {
  private url: string;
  constructor(private http: HttpClient) {
    this.url = "http://54.146.205.172:2020/chef";
  }

  public addChef(chef: Chef): Observable<Chef> {
    return this.http.post<Chef>(this.url, chef);
  }

  public updateChef(chef: Chef): Observable<Chef> {
    return this.http.put<Chef>(this.url, chef);
  }

  public deleteChef(chefId: number) {
    return this.http.delete(this.url + "/" + chefId);
  }

  public getAllChefs(): Observable<Chef[]> {
    return this.http.get<Chef[]>(this.url + "s");
  }

  public getChefById(chefId: number): Observable<Chef> {
    return this.http.get<Chef>(this.url + "/" + chefId);
  }

  public getChefByUsernameAndPassword(chef: Chef): Observable<Chef> {
    return this.http.post<Chef>(this.url + "/login", chef);
  }
}
