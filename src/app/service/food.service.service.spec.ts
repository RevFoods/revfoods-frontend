import { TestBed } from '@angular/core/testing';

import { Food.ServiceService } from './food.service.service';

describe('Food.ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Food.ServiceService = TestBed.get(Food.ServiceService);
    expect(service).toBeTruthy();
  });
});
