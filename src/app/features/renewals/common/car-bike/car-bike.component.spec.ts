import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarBikeComponent } from './car-bike.component';

describe('CarBikeComponent', () => {
  let component: CarBikeComponent;
  let fixture: ComponentFixture<CarBikeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarBikeComponent]
    });
    fixture = TestBed.createComponent(CarBikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
