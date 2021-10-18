import { Injectable } from "@angular/core";
import { FoodCategory } from "../model/food-category";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class FoodCategoryService {
  private url: string;

  constructor(private http: HttpClient) {
    this.url = "http://54.146.205.172:2020/foodCategory";
  }

  public addFoodCategory(foodCategory: FoodCategory): Observable<FoodCategory> {
    return this.http.post<FoodCategory>(this.url, foodCategory);
  }

  public updateFoodCategory(
    foodCategory: FoodCategory
  ): Observable<FoodCategory> {
    return this.http.put<FoodCategory>(this.url, foodCategory);
  }

  public deleteFoodCategory(foodCategoryId: number) {
    return this.http.delete(this.url + "/" + foodCategoryId);
  }

  public getFoodCategoryById(foodCategoryId: number): Observable<FoodCategory> {
    return this.http.get<FoodCategory>(this.url + "/" + foodCategoryId);
  }

  public getAllFoodCategories(): Observable<FoodCategory[]> {
    return this.http.get<FoodCategory[]>(
      "http://54.146.205.172:2020/foodCategories"
    );
  }
}
