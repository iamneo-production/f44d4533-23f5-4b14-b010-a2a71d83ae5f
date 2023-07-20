import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Booking } from '../booking';
import { Customer } from '../customer';
@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private baseURL = "https://8080-fcefddbaffdeffacdcbbcecdcebafeccfa.project.examly.io/repairs";
  private customerURL = "https://8080-fcefddbaffdeffacdcbbcecdcebafeccfa.project.examly.io/register";
  
  constructor(private httpClient: HttpClient) {}
  getBookingsList(): Observable<Booking[]>{
    return this.httpClient.get<Booking[]>(`${this.baseURL}`);
  }

  createBooking(booking: Booking): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, booking);
  }
  getBookingById(id: number): Observable<Booking>{
    return this.httpClient.get<Booking>(`${this.baseURL}/${id}`);
  }
  updateBooking(id: number, booking: Booking): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, booking);
  }
  
  deleteBooking(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
  getBookingsByCustomerId(customerId: number): Observable<Booking[]> {
    return this.httpClient.get<Booking[]>(`${this.baseURL}/register/${customerId}`);
  }
  getCustomerById(customerId: number): Observable<Customer> {
    return this.httpClient.get<Customer>(`${this.customerURL}/${customerId}`);
  }
  
}
