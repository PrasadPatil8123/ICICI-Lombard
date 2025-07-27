import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkmensComponentComponent } from './workmens-component.component';

describe('WorkmensComponentComponent', () => {
  let component: WorkmensComponentComponent;
  let fixture: ComponentFixture<WorkmensComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkmensComponentComponent]
    });
    fixture = TestBed.createComponent(WorkmensComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
