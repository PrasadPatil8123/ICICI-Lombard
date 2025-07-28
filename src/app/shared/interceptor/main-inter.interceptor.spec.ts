import { TestBed } from '@angular/core/testing';

import { MainInterInterceptor } from './main-inter.interceptor';

describe('MainInterInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      MainInterInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: MainInterInterceptor = TestBed.inject(MainInterInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
