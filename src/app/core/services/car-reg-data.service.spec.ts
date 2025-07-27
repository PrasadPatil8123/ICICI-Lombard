import { TestBed } from '@angular/core/testing';

import { CarRegDataService } from './car-reg-data.service';

describe('CarRegDataService', () => {
  let service: CarRegDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarRegDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
