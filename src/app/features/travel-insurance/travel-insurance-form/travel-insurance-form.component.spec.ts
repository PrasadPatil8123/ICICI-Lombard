import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelInsuranceFormComponent } from './travel-insurance-form.component';

describe('TravelInsuranceFormComponent', () => {
  let component: TravelInsuranceFormComponent;
  let fixture: ComponentFixture<TravelInsuranceFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TravelInsuranceFormComponent]
    });
    fixture = TestBed.createComponent(TravelInsuranceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
