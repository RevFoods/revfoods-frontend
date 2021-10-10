import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CustomerTableService } from './customer-table.service';

describe('CustomerTableService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers : [CustomerTableService]

  }));

  it('should be created', () => {
    const service: CustomerTableService = TestBed.get(CustomerTableService);
    expect(service).toBeTruthy();
  });
  it('should get all customertables', () => {
    const service: CustomerTableService = TestBed.get(CustomerTableService);
    expect(service.getAllcustomerTables).toBeTruthy();
  });
  it('should get all customertables by id', () => {
    const service: CustomerTableService = TestBed.get(CustomerTableService);
    expect(service.getcustomerTableById).toBeTruthy();
  });
  it('should add customertables', () => {
    const service: CustomerTableService = TestBed.get(CustomerTableService);
    expect(service.addcustomerTable).toBeTruthy();
  });
  it('should delete customertables', () => {
    const service: CustomerTableService = TestBed.get(CustomerTableService);
    expect(service.deletecustomerTable).toBeTruthy();
  });
  it('should update customertables', () => {
    const service: CustomerTableService = TestBed.get(CustomerTableService);
    expect(service.updatecustomerTable).toBeTruthy();
  });



});
