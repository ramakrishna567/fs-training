import { TestBed } from '@angular/core/testing';

import { CartSrvService } from './cart-srv.service';

describe('CartSrvService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CartSrvService = TestBed.get(CartSrvService);
    expect(service).toBeTruthy();
  });
});
