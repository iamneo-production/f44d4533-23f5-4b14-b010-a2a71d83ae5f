import { Component, OnInit } from '@angular/core';
import { BookingService } from '../services/booking.service';
import { Router } from '@angular/router';
import { Booking } from '../booking';

@Component({
  selector: 'app-admin-repair',
  templateUrl: './admin-repair.component.html',
  styleUrls: ['./admin-repair.component.css']
})
export class AdminRepairComponent implements OnInit{
  bookings!: Booking[];
  searchKeyword: string = '';
  constructor(private bookingService: BookingService,private router:Router){}

  ngOnInit(): void {
    this.getBookings();
  }
  private getBookings(){
    this.bookingService.getBookingsList().subscribe(data =>{
      this.bookings = data;
    });
  }
  deleteBooking(id: number){
    this.bookingService.deleteBooking(id).subscribe( data => {
      console.log(data);
      this.getBookings();
      alert("Successfully deleted");
    })
  }
  bookingDetails(id:number){
    this.router.navigate(['admin-view-repair',id]);
  }
  getStatusClass(status: string) {
    if (status === 'booked') {
      return 'status-booked';
    } else if (status === 'repair completed') {
      return 'status-repair-completed';
    }
    return '';
  }
  searchEmployees() {
    if (this.searchKeyword.trim() !== '') {
      const filteredEmployees = this.bookings.filter((booking: Booking) =>
        booking.customer.name.toLowerCase().includes(this.searchKeyword.toLowerCase()) ||
        booking.type.toLowerCase().includes(this.searchKeyword.toLowerCase()) ||
        booking.status.includes(this.searchKeyword)
      );
      this.bookings = filteredEmployees;
    } else {
      this.getBookings();
    }
  }
 
}



