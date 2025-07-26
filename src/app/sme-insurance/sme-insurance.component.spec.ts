import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmeInsuranceComponent } from './sme-insurance.component';

describe('SmeInsuranceComponent', () => {
  let component: SmeInsuranceComponent;
  let fixture: ComponentFixture<SmeInsuranceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmeInsuranceComponent]
    });
    fixture = TestBed.createComponent(SmeInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
