import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpCompensationComponent } from './emp-compensation.component';

describe('EmpCompensationComponent', () => {
  let component: EmpCompensationComponent;
  let fixture: ComponentFixture<EmpCompensationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpCompensationComponent]
    });
    fixture = TestBed.createComponent(EmpCompensationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
