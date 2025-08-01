import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineeringInsComponent } from './engineering-ins.component';

describe('EngineeringInsComponent', () => {
  let component: EngineeringInsComponent;
  let fixture: ComponentFixture<EngineeringInsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EngineeringInsComponent]
    });
    fixture = TestBed.createComponent(EngineeringInsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
