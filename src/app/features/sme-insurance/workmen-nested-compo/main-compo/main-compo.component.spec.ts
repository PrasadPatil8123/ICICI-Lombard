import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCompoComponent } from './main-compo.component';

describe('MainCompoComponent', () => {
  let component: MainCompoComponent;
  let fixture: ComponentFixture<MainCompoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainCompoComponent]
    });
    fixture = TestBed.createComponent(MainCompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
