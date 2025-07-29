import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllHealthComponent } from './all-health.component';

describe('AllHealthComponent', () => {
  let component: AllHealthComponent;
  let fixture: ComponentFixture<AllHealthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllHealthComponent]
    });
    fixture = TestBed.createComponent(AllHealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
