import { TestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";

import { CustomerTableService } from "./customer-table.service";

describe("CustomerTableService", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CustomerTableService],
    })
  );

  it("should be created", () => {
    const service: CustomerTableService = TestBed.get(CustomerTableService);
    expect(service).toBeTruthy();
  });
  it("should get all customertables", () => {
    const service: CustomerTableService = TestBed.get(CustomerTableService);
    expect(service.getAllCustomerTables).toBeTruthy();
  });
  it("should get all customertables by id", () => {
    const service: CustomerTableService = TestBed.get(CustomerTableService);
    expect(service.getCustomerTableById).toBeTruthy();
  });
  it("should add customertables", () => {
    const service: CustomerTableService = TestBed.get(CustomerTableService);
    expect(service.addCustomerTable).toBeTruthy();
  });
  it("should delete customertables", () => {
    const service: CustomerTableService = TestBed.get(CustomerTableService);
    expect(service.deleteCustomerTable).toBeTruthy();
  });
  it("should update customertables", () => {
    const service: CustomerTableService = TestBed.get(CustomerTableService);
    expect(service.updateCustomerTable).toBeTruthy();
  });
});
