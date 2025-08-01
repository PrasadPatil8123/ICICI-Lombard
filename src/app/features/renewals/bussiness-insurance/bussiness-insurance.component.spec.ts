import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BussinessInsuranceComponent } from './bussiness-insurance.component';

describe('BussinessInsuranceComponent', () => {
  let component: BussinessInsuranceComponent;
  let fixture: ComponentFixture<BussinessInsuranceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BussinessInsuranceComponent]
    });
    fixture = TestBed.createComponent(BussinessInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
