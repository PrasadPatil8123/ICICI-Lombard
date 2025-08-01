import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherImpComponent } from './other-imp.component';

describe('OtherImpComponent', () => {
  let component: OtherImpComponent;
  let fixture: ComponentFixture<OtherImpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OtherImpComponent]
    });
    fixture = TestBed.createComponent(OtherImpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
