import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  customerId: number;
  customer: any;
  updatedName!: string;
  updatedEmail!: string;
  updatedPhone!: string;
  showUpdateFields: boolean = false;
  constructor(private http: HttpClient) {
    const storedCustomerId = localStorage.getItem('customerId');
    if (storedCustomerId) {
      this.customerId = parseInt(storedCustomerId, 10); // Convert the stored value to a number
    } else {
      // Set a default customer ID if not found in localStorage
      this.customerId = 0;
    }
  }

  ngOnInit() {
    this.fetchCustomerData();
  }

  fetchCustomerData() {
    this.http.get(`https://8080-fcefddbaffdeffacdcbbcecdcebafeccfa.project.examly.io/register/${this.customerId}`).subscribe(
      (data) => {
        this.customer = data;
      },
      (error) => {
        console.error('Error fetching customer data:', error);
      }
    );
  }
  toggleUpdateFields() {
    this.showUpdateFields = !this.showUpdateFields;
    if (!this.showUpdateFields) {
      this.clearUpdateFields();
    }
  }
  updateCustomer() {
    const updatedCustomer = {
      ...this.customer,
      name: this.updatedName,
      email: this.updatedEmail,
      phone: this.updatedPhone
    };

    this.http.put(`https://8080-fcefddbaffdeffacdcbbcecdcebafeccfa.project.examly.io/register/${this.customer.customerId}`, updatedCustomer).subscribe(
      (data) => {
        this.customer = data;
        console.log('Customer data updated successfully');
        alert("Profile updated");
        this.showUpdateFields = false;
        this.clearUpdateFields();
      },
      (error) => {
        console.error('Error updating customer data:', error);
      }
    );
  }

  clearUpdateFields() {
    this.updatedName = '';
    this.updatedEmail = '';
    this.updatedPhone = '';
  }
}
