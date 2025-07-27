import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeClaimsComponent } from './home-claims.component';

describe('HomeClaimsComponent', () => {
  let component: HomeClaimsComponent;
  let fixture: ComponentFixture<HomeClaimsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeClaimsComponent]
    });
    fixture = TestBed.createComponent(HomeClaimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
