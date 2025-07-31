import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiabilityInsComponent } from './liability-ins.component';

describe('LiabilityInsComponent', () => {
  let component: LiabilityInsComponent;
  let fixture: ComponentFixture<LiabilityInsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LiabilityInsComponent]
    });
    fixture = TestBed.createComponent(LiabilityInsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
