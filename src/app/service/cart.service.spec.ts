import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CartService } from './cart.service';

describe('CartService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers : [CartService]
  }));

  it('should be created', () => {
    const service: CartService = TestBed.get(CartService);
    expect(service).toBeTruthy();
  });
  it('should get all carts by id', () => {
    const service: CartService = TestBed.get(CartService);
    expect(service.getCartById).toBeTruthy();
  });
  it('should get all carts', () => {
    const service: CartService = TestBed.get(CartService);
    expect(service.getAllCarts).toBeTruthy();
  });
  
  it('should delete cart', () => {
    const service: CartService = TestBed.get(CartService);
    expect(service.deleteCart).toBeTruthy();
  });
  it('should update cart', () => {
    const service: CartService = TestBed.get(CartService);
    expect(service.updateCart).toBeTruthy();
  });
  it('should add cart', () => {
    const service: CartService = TestBed.get(CartService);
    expect(service.addCart).toBeTruthy();
  });
});
