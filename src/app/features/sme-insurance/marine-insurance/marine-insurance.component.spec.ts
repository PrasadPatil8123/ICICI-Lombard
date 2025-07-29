import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarineInsuranceComponent } from './marine-insurance.component';

describe('MarineInsuranceComponent', () => {
  let component: MarineInsuranceComponent;
  let fixture: ComponentFixture<MarineInsuranceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarineInsuranceComponent]
    });
    fixture = TestBed.createComponent(MarineInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
