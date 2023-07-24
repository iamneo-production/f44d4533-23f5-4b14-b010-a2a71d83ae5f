import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Booking } from '../booking';
import { Customer } from '../customer';
@Injectable({
  providedIn: 'root'
})
export class BookingService {
  branch: string = '';
  baseURL: string = '';
  customerURL:string= '';

  constructor(private httpClient: HttpClient) {
    const start = window.location.href.indexOf('-') + 1;
    const end = window.location.href.indexOf('.project');
    this.branch = window.location.href.substring(start, end);
    this.baseURL = `https://8080-${this.branch}.project.examly.io/repairs`;
    this.customerURL = `https://8080-${this.branch}.project.examly.io/register`;
  }

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
