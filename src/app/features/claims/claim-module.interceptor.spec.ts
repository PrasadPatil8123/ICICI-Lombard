import { TestBed } from '@angular/core/testing';

import { ClaimModuleInterceptor } from './claim-module.interceptor';

describe('ClaimModuleInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ClaimModuleInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ClaimModuleInterceptor = TestBed.inject(ClaimModuleInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
