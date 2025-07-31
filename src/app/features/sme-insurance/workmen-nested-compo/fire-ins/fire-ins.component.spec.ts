import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FireInsComponent } from './fire-ins.component';

describe('FireInsComponent', () => {
  let component: FireInsComponent;
  let fixture: ComponentFixture<FireInsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FireInsComponent]
    });
    fixture = TestBed.createComponent(FireInsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
