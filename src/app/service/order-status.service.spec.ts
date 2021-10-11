import { TestBed } from "@angular/core/testing";
import {
  HttpClientTestingModule,
} from "@angular/common/http/testing";
import { HttpClientModule } from "@angular/common/http";

import { OrderStatusService } from "./order-status.service";
import { FoodCategoryService } from "./food-category.service";

describe("OrderStatusService", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, HttpClientModule],
      providers: [OrderStatusService, FoodCategoryService],
    })
  );

  it("should be created", () => {
    const service: OrderStatusService = TestBed.get(OrderStatusService);
    expect(service).toBeTruthy();
  });
  it("should return all order status", () => {
    const service: OrderStatusService = TestBed.get(OrderStatusService);
    expect(service.getAllOrderStatuses).toBeTruthy();
  });
  it("should add order status", () => {
    const service: OrderStatusService = TestBed.get(OrderStatusService);
    expect(service.addOrderStatus).toBeTruthy();
  });
  it("should delete order status", () => {
    const service: OrderStatusService = TestBed.get(OrderStatusService);
    expect(service.deleteOrderStatus).toBeTruthy();
  });
  it("should update order status", () => {
    const service: OrderStatusService = TestBed.get(OrderStatusService);
    expect(service.updateOrderStatus).toBeTruthy();
  });
  it("should get order status by id", () => {
    const service: OrderStatusService = TestBed.get(OrderStatusService);
    expect(service.getOrderStatusById).toBeTruthy();
  });
});
