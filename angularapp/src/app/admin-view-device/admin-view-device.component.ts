import { Component, OnInit } from '@angular/core';
import { BookingService } from '../services/booking.service';
import { ActivatedRoute } from '@angular/router';
import { Booking } from '../booking';

@Component({
  selector: 'app-admin-view-device',
  templateUrl: './admin-view-device.component.html',
  styleUrls: ['./admin-view-device.component.css']
})
export class AdminViewDeviceComponent implements OnInit {
  id!: number
  booking: Booking = new Booking(); 
  constructor(private route: ActivatedRoute, private bookingService: BookingService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.bookingService.getBookingById(this.id).subscribe( data => {
      this.booking = data;
    });
  }
}

