import { TestBed } from '@angular/core/testing';

import { MysqlServicesService } from './mysql-services.service';

describe('MysqlServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MysqlServicesService = TestBed.get(MysqlServicesService);
    expect(service).toBeTruthy();
  });
});
