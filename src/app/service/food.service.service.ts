import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Food } from "../model/food";

@Injectable({
  providedIn: "root",
})
export class FoodService {
  private url: string;
  constructor(private http: HttpClient) {
    this.url = "http://localhost:2020/food";
  }

  public addFood(food: Food): Observable<Food> {
    return this.http.post<Food>(this.url, food);
  }

  public updateFood(food: Food): Observable<Food> {
    return this.http.put<Food>(this.url, food);
  }

  public deleteFood(foodId: number) {
    return this.http.delete(this.url + "/" + foodId);
  }

  public getAllFoods(): Observable<Food[]> {
    return this.http.get<Food[]>(this.url + "s");
  }

  public getFoodById(foodId: number): Observable<Food> {
    return this.http.get<Food>(this.url + "/" + foodId);
  }
}
