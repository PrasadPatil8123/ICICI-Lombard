import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScopeModelComponent } from './scope-model.component';

describe('ScopeModelComponent', () => {
  let component: ScopeModelComponent;
  let fixture: ComponentFixture<ScopeModelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScopeModelComponent]
    });
    fixture = TestBed.createComponent(ScopeModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
