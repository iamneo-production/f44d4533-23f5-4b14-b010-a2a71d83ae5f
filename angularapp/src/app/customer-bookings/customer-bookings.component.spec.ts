import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerBookingsComponent } from './customer-bookings.component';

describe('CustomerBookingsComponent', () => {
  let component: CustomerBookingsComponent;
  let fixture: ComponentFixture<CustomerBookingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerBookingsComponent]
    });
    fixture = TestBed.createComponent(CustomerBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
