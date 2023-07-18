import { Component, OnInit } from '@angular/core';
import { BookingService } from '../services/booking.service';
import { Booking } from '../booking';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css']
})
export class BookingDetailsComponent implements OnInit {
  id!: number;
  booking: Booking = new Booking(); // Initialize booking object

  constructor(private route: ActivatedRoute, private bookingService: BookingService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.bookingService.getBookingById(this.id).subscribe(
      (data) => {
        this.booking = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
