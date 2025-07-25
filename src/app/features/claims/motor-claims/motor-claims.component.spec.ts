import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorClaimsComponent } from './motor-claims.component';

describe('MotorClaimsComponent', () => {
  let component: MotorClaimsComponent;
  let fixture: ComponentFixture<MotorClaimsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MotorClaimsComponent]
    });
    fixture = TestBed.createComponent(MotorClaimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
