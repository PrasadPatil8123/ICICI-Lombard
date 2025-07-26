import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedQuotesComponent } from './saved-quotes.component';

describe('SavedQuotesComponent', () => {
  let component: SavedQuotesComponent;
  let fixture: ComponentFixture<SavedQuotesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SavedQuotesComponent]
    });
    fixture = TestBed.createComponent(SavedQuotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
