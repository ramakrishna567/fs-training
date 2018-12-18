import { TestBed } from '@angular/core/testing';

import { FirstSrvService } from './first-srv.service';

describe('FirstSrvService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FirstSrvService = TestBed.get(FirstSrvService);
    expect(service).toBeTruthy();
  });
});
