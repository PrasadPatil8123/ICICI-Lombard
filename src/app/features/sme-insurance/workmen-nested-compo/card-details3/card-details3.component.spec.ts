import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDetails3Component } from './card-details3.component';

describe('CardDetails3Component', () => {
  let component: CardDetails3Component;
  let fixture: ComponentFixture<CardDetails3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardDetails3Component]
    });
    fixture = TestBed.createComponent(CardDetails3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
