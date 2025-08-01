import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatineInsComponent } from './matine-ins.component';

describe('MatineInsComponent', () => {
  let component: MatineInsComponent;
  let fixture: ComponentFixture<MatineInsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatineInsComponent]
    });
    fixture = TestBed.createComponent(MatineInsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
