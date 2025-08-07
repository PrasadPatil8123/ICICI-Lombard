import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViseModelComponent } from './vise-model.component';

describe('ViseModelComponent', () => {
  let component: ViseModelComponent;
  let fixture: ComponentFixture<ViseModelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViseModelComponent]
    });
    fixture = TestBed.createComponent(ViseModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
