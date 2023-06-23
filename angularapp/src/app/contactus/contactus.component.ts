import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {
  feedbackForm: FormGroup | any;
  rating: number | any;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.feedbackForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }
  setRating(rating: number) {
    this.rating = rating;
  }

  submitFeedback() {
    if (this.feedbackForm.invalid) {
      return;
    }
    console.log('Feedback submitted:', this.feedbackForm.value);
    // You can make an HTTP request to send the feedback to a server
    this.feedbackForm.reset();
  }
}
