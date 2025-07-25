import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorpClaimsComponent } from './corp-claims.component';

describe('CorpClaimsComponent', () => {
  let component: CorpClaimsComponent;
  let fixture: ComponentFixture<CorpClaimsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CorpClaimsComponent]
    });
    fixture = TestBed.createComponent(CorpClaimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
