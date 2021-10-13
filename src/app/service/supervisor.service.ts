import { Injectable } from "@angular/core";
import { Supervisor } from "../model/supervisor";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class SupervisorService {
  private url: string;

  constructor(private http: HttpClient) {
    this.url = "http://localhost:2020/supervisor";
  }

  public addSupervisor(supervisor: Supervisor): Observable<Supervisor> {
    return this.http.post<Supervisor>(this.url, supervisor);
  }

  public deleteSupervisor(supervisorId: number) {
    return this.http.delete(this.url + "/" + supervisorId);
  }

  public updateSupervisor(supervisor: Supervisor): Observable<Supervisor> {
    return this.http.put<Supervisor>(this.url, supervisor);
  }

  public getAllSupervisors(): Observable<Supervisor[]> {
    return this.http.get<Supervisor[]>(this.url + "s");
  }

  public getSupervisorById(supervisorId: number): Observable<Supervisor> {
    return this.http.get<Supervisor>(this.url + "/" + supervisorId);
  }

  public getSupervisorByUsernameAndPassword(supervisor: Supervisor) : Observable<Supervisor>{
    return this.http.post<Supervisor>(this.url + "/login", supervisor)
  }

}
