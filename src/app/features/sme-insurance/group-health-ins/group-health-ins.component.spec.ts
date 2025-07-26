import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupHealthInsComponent } from './group-health-ins.component';

describe('GroupHealthInsComponent', () => {
  let component: GroupHealthInsComponent;
  let fixture: ComponentFixture<GroupHealthInsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GroupHealthInsComponent]
    });
    fixture = TestBed.createComponent(GroupHealthInsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
