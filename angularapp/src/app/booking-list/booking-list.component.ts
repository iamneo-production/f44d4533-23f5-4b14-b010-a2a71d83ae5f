import { Component, OnInit } from '@angular/core';
import { Booking } from '../booking';
import { BookingService } from '../services/booking.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent implements OnInit {
  bookings!: Booking[];
  customerId!: number;

  constructor(private bookingService: BookingService, private router: Router) {}

  ngOnInit(): void {
    this.customerId = Number(localStorage.getItem('customerId')); // Retrieve customerId from localStorage
    this.getBookingsByCustomerId();
  }

  private getBookingsByCustomerId() {
    this.bookingService.getBookingsByCustomerId(this.customerId).subscribe(
      (data) => {
        this.bookings = data;
        this.getCustomerDetailsForBookings();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  private getCustomerDetailsForBookings() {
    if (this.bookings) {
      this.bookings.forEach((booking) => {
        this.bookingService.getCustomerById(booking.customer.customerId).subscribe(
          (customer) => {
            booking.customer.name = customer.name;
            booking.customer.phone = customer.phone;
          },
          (error) => {
            console.log(error);
          }
        );
      });
    }
  }

  updateBooking(id: number) {
    this.router.navigate(['update-booking', id]);
  }

  deleteBooking(id: number) {
    this.bookingService.deleteBooking(id).subscribe(
      (data) => {
        console.log(data);
        this.getBookingsByCustomerId();
        alert('Successfully deleted');
      },
      (error) => {
        console.log(error);
      }
    );
  }

  bookingDetails(id: number) {
    this.router.navigate(['booking-details', id]);
  }

  getStatusClass(status: string) {
    if (status === 'booked') {
      return 'status-booked';
    } else if (status === 'repair completed') {
      return 'status-repair-completed';
    }
    return '';
  }
}
