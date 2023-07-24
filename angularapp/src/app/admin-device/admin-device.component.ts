import { Component, OnInit } from '@angular/core';
import { Booking } from '../booking';
import { BookingService } from '../services/booking.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-device',
  templateUrl: './admin-device.component.html',
  styleUrls: ['./admin-device.component.css']
})
export class AdminDeviceComponent implements OnInit {
  bookings: Booking[] = [];
  searchTerm: string = '';
  constructor(private bookingService: BookingService,private router:Router){}

  ngOnInit(): void {
    this.getBookings();
  }
  private getBookings(){
    this.bookingService.getBookingsList().subscribe(data =>{
      this.bookings = data;
    });
  }
  updateBooking(id:number){
    this.router.navigate(['admin-update-device',id]);
  }
  deleteBooking(id: number){
    this.bookingService.deleteBooking(id).subscribe( data => {
      console.log(data);
      this.getBookings();
      alert("Successfully deleted");
    })
  }
  bookingDetails(id:number){
    this.router.navigate(['admin-view-device',id]);
  }
  navigateToAddDevicePage() {
    this.router.navigate(['/admin-add-device']);
  }

 // Assuming you have an array of bookings

get filteredBookings(): Booking[] {
  return this.bookings.filter(booking => {
    const searchTermLowerCase = this.searchTerm.toLowerCase();
    return (
      booking.type.toLowerCase().includes(searchTermLowerCase) ||
      booking.brand.toLowerCase().includes(searchTermLowerCase) ||
      booking.model.toLowerCase().includes(searchTermLowerCase)
    );
  });
}


}
