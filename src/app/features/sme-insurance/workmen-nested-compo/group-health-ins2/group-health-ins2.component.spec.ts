import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupHealthIns2Component } from './group-health-ins2.component';

describe('GroupHealthIns2Component', () => {
  let component: GroupHealthIns2Component;
  let fixture: ComponentFixture<GroupHealthIns2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GroupHealthIns2Component]
    });
    fixture = TestBed.createComponent(GroupHealthIns2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
