import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ChefService } from './chef.service';

describe('ChefService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers : [ChefService]

  }));

  it('should be created', () => {
    const service: ChefService = TestBed.get(ChefService);
    expect(service).toBeTruthy();

  });
  it('should get all chefs', () => {
    const service: ChefService = TestBed.get(ChefService);
    expect(service.getAllChefs).toBeTruthy();
    
  });
  it('should get all chefs by id', () => {
    const service: ChefService = TestBed.get(ChefService);
    expect(service.getChefById).toBeTruthy();
  });
  it('should add chefs', () => {
    const service: ChefService = TestBed.get(ChefService);
    expect(service.addChef).toBeTruthy(); 
  });
  it('should delete chefs', () => {
    const service: ChefService = TestBed.get(ChefService);
    expect(service.deleteChef).toBeTruthy(); 
  });
  it('should update chefs', () => {
    const service: ChefService = TestBed.get(ChefService);
    expect(service.updateChef).toBeTruthy(); 
  });
});
