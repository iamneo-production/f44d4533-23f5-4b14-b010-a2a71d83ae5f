import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBookingComponent } from './create-booking.component';

describe('CreateBookingComponent', () => {
  let component: CreateBookingComponent;
  let fixture: ComponentFixture<CreateBookingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateBookingComponent]
    });
    fixture = TestBed.createComponent(CreateBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
