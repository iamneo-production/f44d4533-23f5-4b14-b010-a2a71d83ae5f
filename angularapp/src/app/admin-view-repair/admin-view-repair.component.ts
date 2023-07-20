import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookingService } from '../services/booking.service';
import { Booking } from 'src/app/booking';
import { Customer } from '../customer';

@Component({
  selector: 'app-admin-view-repair',
  templateUrl: './admin-view-repair.component.html',
  styleUrls: ['./admin-view-repair.component.css']
})
export class AdminViewRepairComponent implements OnInit {
  id!: number;
  booking: Booking = new Booking();
  customer: Customer = new Customer(); 

  constructor(private route: ActivatedRoute, private bookingService: BookingService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.bookingService.getBookingById(this.id).subscribe((data) => {
          this.booking = data;
      });
  }
}
