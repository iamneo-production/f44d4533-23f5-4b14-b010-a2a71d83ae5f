import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-customers',
  templateUrl: './admin-customers.component.html',
  styleUrls: ['./admin-customers.component.css']
})
export class AdminCustomersComponent implements OnInit {
  customers: any[] = [];
  filteredCustomers: any[] = [];

  searchTerm: string = '';

  constructor(private http: HttpClient) {
    this.filteredCustomers = [];
  }
  

  ngOnInit(): void {
    this.filteredCustomers = []; // Initialize the array here
    this.getCustomers();
  }
  
  getCustomers(): void {
    this.http.get<any[]>('https://8080-bfbfcfbdddeffacdcbbcecdcebafeccfa.project.examly.io/register').subscribe(
      (response) => {
        this.customers = response;
        this.filteredCustomers = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  deleteCustomer(customerId: number): void {
    this.http.delete(`https://8080-bfbfcfbdddeffacdcbbcecdcebafeccfa.project.examly.io/register/${customerId}`).subscribe(
      () => {
        console.log('Deleting customer with ID:', customerId);
        // Refresh the customer list
        this.getCustomers();
        alert("Customer deleted successfully");
      },
      (error) => {
        console.log('Error deleting customer:', error);
        alert("first remove customer from repair records");
      }
    );
  }

  searchCustomers(): void {
    const searchTerm = this.searchTerm.toLowerCase().trim();
    if (searchTerm === '') {
      this.filteredCustomers = this.customers;
    } else {
      this.filteredCustomers = this.customers.filter((customer) => {
        return (
          customer.name.toLowerCase().includes(searchTerm) ||
          customer.email.toLowerCase().includes(searchTerm) 
        );
      });
    }
  }
}