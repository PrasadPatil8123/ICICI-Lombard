import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDetails1Component } from './card-details1.component';

describe('CardDetails1Component', () => {
  let component: CardDetails1Component;
  let fixture: ComponentFixture<CardDetails1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardDetails1Component]
    });
    fixture = TestBed.createComponent(CardDetails1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
