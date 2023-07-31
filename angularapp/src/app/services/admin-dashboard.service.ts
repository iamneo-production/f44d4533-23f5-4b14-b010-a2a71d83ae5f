import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AdminDashboardService {

  constructor(private http : HttpClient) { }

  numberOfCustomers(): Observable<any>{
    return this.http.get("https://8080-effcecdcddaadadeffacdcbbcecdcebafeccfa.project.examly.io/register/customer-number");
  }

  numberOfEmployees(): Observable<any>{
    return this.http.get("https://8080-effcecdcddaadadeffacdcbbcecdcebafeccfa.project.examly.io/employee-number");
  }

  numberOfRepairs(): Observable<any>{
    return this.http.get("https://8080-effcecdcddaadadeffacdcbbcecdcebafeccfa.project.examly.io/repair-number");
  }

  getRepairRecords(){
    return this.http.get<any[]>("https://8080-effcecdcddaadadeffacdcbbcecdcebafeccfa.project.examly.io/repairs")
  }
  getBookedRepairs(){
    return this.getRepairRecords().pipe(map(records=> records.filter(record=> record.status==='booked')));
  }
  getCompletedRepairs(){
    return this.getRepairRecords().pipe(map(records=>records.filter(record=> record.status==='repair completed')));
  }
  
  
}