import { Component, OnInit } from '@angular/core';
import { Booking } from '../booking';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookingService } from '../services/booking.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-add-device',
  templateUrl: './admin-add-device.component.html',
  styleUrls: ['./admin-add-device.component.css']
})
export class AdminAddDeviceComponent implements OnInit {
  booking: Booking = new Booking();
  bookingForm!: FormGroup;
  showOtherDeviceType = false;
  showOtherDeviceBrand = false;
  showOtherProblem = false;
  constructor(private bookingService: BookingService,
    private router: Router,private formBuilder: FormBuilder) { }
    ngOnInit(): void {
      this.bookingForm = this.formBuilder.group({
        deviceType: ['', Validators.required],
        devicedevicedeviceBrand: ['', Validators.required],
        deviceModel: ['', Validators.required],
      });
    }
  saveBooking(){
    this.bookingService.createBooking(this.booking).subscribe( data =>{
      console.log(data);
      this.goToBookingList();
    },
    error => console.log(error));
  }

  goToBookingList(){
    this.router.navigate(['/admin-device']);
  }

  onSubmit(){
    console.log(this.booking);
    this.saveBooking();
    alert("successfully Device Added");
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

 
  

}


