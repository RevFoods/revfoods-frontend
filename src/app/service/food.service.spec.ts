import { TestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";

import { FoodService } from "./food.service";

describe("FoodService", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FoodService],
    })
  );

  it("should be created", () => {
    const service: FoodService = TestBed.get(FoodService);
    expect(service).toBeTruthy();
  });
});
