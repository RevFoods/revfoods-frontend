import { TestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";

import { FoodCategoryService } from "./food-category.service";

describe("FoodCategoryService", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FoodCategoryService],
    })
  );

  it("should be created", () => {
    const service: FoodCategoryService = TestBed.get(FoodCategoryService);
    expect(service).toBeTruthy();
  });

});