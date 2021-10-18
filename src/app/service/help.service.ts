import { NumberSymbol } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Help } from "../model/help";

@Injectable({
  providedIn: "root",
})
export class HelpService {
  url: string;

  constructor(private http: HttpClient) {
    this.url = "http://localhost:2020/help";
  }
  public addHelp(help: Help): Observable<Help> {
    return this.http.post<Help>(this.url, help);
  }
  public updateHelp(help: Help): Observable<Help> {
    return this.http.put<Help>(this.url, help);
  }
  public getAllHelps(): Observable<Help[]> {
    return this.http.get<Help[]>(this.url + "s");
  }
  public deleteHelp(helpId: number) {
    return this.http.delete(this.url + "/" + helpId);
  }

  public getHelpById(helpId: number): Observable<Help> {
    return this.http.get<Help>(this.url + "/" + helpId);
  }

  public updateHelpStatus(
    helpId: Number,
    helpStatus: boolean
  ): Observable<Help> {
    return this.http.put<Help>(
      this.url + "/" + helpId + "/" + "helpStatus" + "/" + helpStatus,
      helpStatus
    );
  }
}
