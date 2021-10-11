import { TestBed } from "@angular/core/testing";
import {
  HttpClientTestingModule,
} from "@angular/common/http/testing";

import { FoodOrderService } from "./food-order.service";

describe("FoodOrderService", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FoodOrderService],
    })
  );

  it("should be created", () => {
    const service: FoodOrderService = TestBed.get(FoodOrderService);
    expect(service).toBeTruthy();
  });

  it("should get all foodorders", () => {
    const service: FoodOrderService = TestBed.get(FoodOrderService);
    expect(service.getAllFoodOrders).toBeTruthy();
  });
  it("should get all foodorders by id", () => {
    const service: FoodOrderService = TestBed.get(FoodOrderService);
    expect(service.getFoodOrderById).toBeTruthy();
  });
  it("should add  foodorders", () => {
    const service: FoodOrderService = TestBed.get(FoodOrderService);
    expect(service.addFoodOrder).toBeTruthy();
  });
  it("should delete foodorders", () => {
    const service: FoodOrderService = TestBed.get(FoodOrderService);
    expect(service.deleteFoodOrder).toBeTruthy();
  });
  it("should update foodorders", () => {
    const service: FoodOrderService = TestBed.get(FoodOrderService);
    expect(service.updateFoodOrder).toBeTruthy();
  });
});
