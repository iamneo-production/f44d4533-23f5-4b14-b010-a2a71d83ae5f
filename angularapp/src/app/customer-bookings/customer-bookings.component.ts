import { Component, OnInit } from '@angular/core';
import { Booking } from '../booking';
import { BookingService } from '../services/booking.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-bookings',
  templateUrl: './customer-bookings.component.html',
  styleUrls: ['./customer-bookings.component.css']
})
export class CustomerBookingsComponent implements OnInit {
  bookings!: Booking[];

  constructor(private bookingService: BookingService, private router: Router) {}

  ngOnInit(): void {
    this.getBookings();
  }

  private getBookings() {
    this.bookingService.getBookingsList().subscribe((data: Booking[]) => {
      this.bookings = data;
    });
  }

  updateStatus(id: number) {
    this.bookingService.getBookingById(id).subscribe((booking: Booking) => {
      booking.status = 'repair completed';
      this.bookingService.updateBooking(id, booking).subscribe((updatedBooking: any) => {
        // Update the booking in the local list
        const index = this.bookings.findIndex(b => b.id === updatedBooking.id);
        if (index !== -1) {
          this.bookings[index] = updatedBooking;
        }
        alert('Status updated successfully');
      });
    });
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
