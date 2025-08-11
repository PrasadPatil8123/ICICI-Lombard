import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherImp2Component } from './other-imp2.component';

describe('OtherImp2Component', () => {
  let component: OtherImp2Component;
  let fixture: ComponentFixture<OtherImp2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OtherImp2Component]
    });
    fixture = TestBed.createComponent(OtherImp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
