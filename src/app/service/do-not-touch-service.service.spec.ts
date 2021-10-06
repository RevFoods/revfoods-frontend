import { TestBed } from '@angular/core/testing';

import { DoNotTouchServiceService } from './do-not-touch-service.service';

describe('DoNotTouchServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DoNotTouchServiceService = TestBed.get(DoNotTouchServiceService);
    expect(service).toBeTruthy();
  });
});
