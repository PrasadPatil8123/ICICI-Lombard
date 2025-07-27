import { TestBed } from '@angular/core/testing';

import { HealthClaimsService } from './health-claims.service';

describe('HealthClaimsService', () => {
  let service: HealthClaimsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HealthClaimsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
