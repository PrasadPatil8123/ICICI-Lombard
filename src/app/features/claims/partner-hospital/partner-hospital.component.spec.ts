import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerHospitalComponent } from './partner-hospital.component';

describe('PartnerHospitalComponent', () => {
  let component: PartnerHospitalComponent;
  let fixture: ComponentFixture<PartnerHospitalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PartnerHospitalComponent]
    });
    fixture = TestBed.createComponent(PartnerHospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
