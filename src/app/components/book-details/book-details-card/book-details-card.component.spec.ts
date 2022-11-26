import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDetailsCardComponent } from './book-details-card.component';

describe('BookDetailsCardComponent', () => {
  let component: BookDetailsCardComponent;
  let fixture: ComponentFixture<BookDetailsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookDetailsCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookDetailsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
