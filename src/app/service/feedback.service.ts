import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Feedback } from "../model/feedback";

@Injectable({
  providedIn: "root",
})
export class FeedbackService {
  private url: string;

  constructor(private http: HttpClient) {
    this.url = "http://localhost:2020/feedback";
  }

  public addFeedback(feedback: Feedback): Observable<Feedback> {
    return this.http.post<Feedback>(this.url, feedback);
  }

  public updateFeedback(feedback: Feedback): Observable<Feedback> {
    return this.http.put<Feedback>(this.url, feedback);
  }

  public getAllFeedbacks(): Observable<Feedback[]> {
    return this.http.get<Feedback[]>(this.url + "s");
  }

  public getFeedbackById(feedbackId: number): Observable<Feedback> {
    return this.http.get<Feedback>(this.url + "/" + feedbackId);
  }

  public deleteFeedback(feedbackId: number) {
    return this.http.delete(this.url + "/" + feedbackId);
  }
}
