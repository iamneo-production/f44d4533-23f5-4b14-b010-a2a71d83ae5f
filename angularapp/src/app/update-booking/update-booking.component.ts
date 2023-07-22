import { Component, OnInit } from '@angular/core';
import { BookingService } from '../services/booking.service';
import { Booking } from '../booking';
import { ActivatedRoute,Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-update-booking',
  templateUrl: './update-booking.component.html',
  styleUrls: ['./update-booking.component.css']
})
export class UpdateBookingComponent implements OnInit{
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
      deviceModel: ['', Validators.required],
      problem: ['', Validators.required]
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
    this.router.navigate(['/booking-list']);
    alert("Successfully updated");
  }
}
