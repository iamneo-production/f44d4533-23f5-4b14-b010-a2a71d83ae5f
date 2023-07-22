import { Component, OnInit } from '@angular/core';
import { BookingService } from '../services/booking.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Booking } from '../booking';

@Component({
  selector: 'app-admin-update-device',
  templateUrl: './admin-update-device.component.html',
  styleUrls: ['./admin-update-device.component.css']
})
export class AdminUpdateDeviceComponent implements OnInit {
  id!: number;
  booking: Booking = new Booking();
  bookingForm!: FormGroup;
  constructor(private bookingService: BookingService,
    private route: ActivatedRoute,
    private router: Router,private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    this.bookingForm = this.formBuilder.group({
      deviceType: ['', Validators.required],
      deviceBrand: ['', Validators.required],
      deviceModel: ['', Validators.required]
    });
    this.id = this.route.snapshot.params['id'];

    this.bookingService.getBookingById(this.id).subscribe(data => {
      this.booking = data;
    }, error => console.log(error));
  }
  onSubmit(){
    this.bookingService.updateBooking(this.id, this.booking).subscribe( data =>{
      this.goToEmployeeList();
    }
    , error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/admin-device']);
    alert("Successfully updated");
  }
}
