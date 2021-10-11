import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CustomerService } from './customer.service';

describe('CustomerService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers : [CustomerService]

  }));

  it('should be created', () => {
    const service: CustomerService = TestBed.get(CustomerService);
    expect(service).toBeTruthy();
  });
  it('should get all customers', () => {
    const service: CustomerService = TestBed.get(CustomerService);
    expect(service.getAllCustomers).toBeTruthy();
  });
  it('should get all customers by id', () => {
    const service: CustomerService = TestBed.get(CustomerService);
    expect(service.getCustomerById).toBeTruthy();
  });
  it('should add customers', () => {
    const service: CustomerService = TestBed.get(CustomerService);
    expect(service.addCustomer).toBeTruthy();
  });
  it('should delete customers', () => {
    const service: CustomerService = TestBed.get(CustomerService);
    expect(service.deleteCustomer).toBeTruthy();
  });
  it('should update customers', () => {
    const service: CustomerService = TestBed.get(CustomerService);
    expect(service.updateCustomer).toBeTruthy();
  });
});
