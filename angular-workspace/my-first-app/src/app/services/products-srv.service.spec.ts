import { TestBed } from '@angular/core/testing';

import { ProductsSrvService } from './products-srv.service';

describe('ProductsSrvService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductsSrvService = TestBed.get(ProductsSrvService);
    expect(service).toBeTruthy();
  });
});
