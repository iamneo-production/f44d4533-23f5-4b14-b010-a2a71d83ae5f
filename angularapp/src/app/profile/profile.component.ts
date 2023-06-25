import { Component } from '@angular/core';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  user: any = {
    name: 'John Doe',
    email: 'john@example.com',
    phoneNumber: '9876789345',
  };
  editProfile() {
  }
}
