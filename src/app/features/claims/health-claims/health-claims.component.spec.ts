import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthClaimsComponent } from './health-claims.component';

describe('HealthClaimsComponent', () => {
  let component: HealthClaimsComponent;
  let fixture: ComponentFixture<HealthClaimsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HealthClaimsComponent]
    });
    fixture = TestBed.createComponent(HealthClaimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
