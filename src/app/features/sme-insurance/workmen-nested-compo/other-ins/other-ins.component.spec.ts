import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherInsComponent } from './other-ins.component';

describe('OtherInsComponent', () => {
  let component: OtherInsComponent;
  let fixture: ComponentFixture<OtherInsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OtherInsComponent]
    });
    fixture = TestBed.createComponent(OtherInsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
