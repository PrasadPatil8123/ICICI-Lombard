import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimVdoComponent } from './claim-vdo.component';

describe('ClaimVdoComponent', () => {
  let component: ClaimVdoComponent;
  let fixture: ComponentFixture<ClaimVdoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClaimVdoComponent]
    });
    fixture = TestBed.createComponent(ClaimVdoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
