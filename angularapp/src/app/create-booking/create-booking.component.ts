import { Component, OnInit } from '@angular/core';
import { Booking } from '../booking';
import { BookingService } from '../services/booking.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Customer } from '../customer';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.css']
})
export class CreateBookingComponent implements OnInit {
  booking: Booking = new Booking();
  bookingForm!: FormGroup;
  showOtherDeviceType = false;
  showOtherDeviceBrand = false;
  showOtherProblem = false;
  customerId!: number; // Add this property

  constructor(
    private bookingService: BookingService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.bookingForm = this.formBuilder.group({
      deviceType: ['', Validators.required],
      deviceBrand: ['', Validators.required],
      deviceModel: ['', Validators.required],
      problem: ['', Validators.required]
    });

    this.customerId = Number(localStorage.getItem('customerId')); // Retrieve customerId from localStorage
    this.booking.customer = { customerId: this.customerId } as Customer; // Set the customer ID in the booking object
  }

  saveBooking() {
    this.bookingService.createBooking(this.booking).subscribe(data => {
      console.log(data);
      this.goToBookingList();
    },
    error => console.log(error));
  }

  goToBookingList() {
    this.router.navigate(['/booking-list']);
  }

  onSubmit() {
    console.log(this.booking);
    this.saveBooking();
    alert("Successfully booked");
  }

  onDeviceTypeChange() {
    if (this.booking.type === 'others') {
      this.showOtherDeviceType = true;
    } else {
      this.showOtherDeviceType = false;
    }
  }

  onDeviceBrandChange() {
    if (this.booking.brand === 'others') {
      this.showOtherDeviceBrand = true;
    } else {
      this.showOtherDeviceBrand = false;
    }
  }

  onProblemChange() {
    if (this.booking.description === 'others') {
      this.showOtherProblem = true;
    } else {
      this.showOtherProblem = false;
    }
  }
}
