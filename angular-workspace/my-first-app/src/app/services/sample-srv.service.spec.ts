import { TestBed } from '@angular/core/testing';

import { SampleSrvService } from './sample-srv.service';

describe('SampleSrvService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SampleSrvService = TestBed.get(SampleSrvService);
    expect(service).toBeTruthy();
  });
});
