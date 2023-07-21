import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-navbar',
  templateUrl: './employee-navbar.component.html',
  styleUrls: ['./employee-navbar.component.css']
})
export class EmployeeNavbarComponent {
  constructor(private router: Router){

  }
  logOut(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
