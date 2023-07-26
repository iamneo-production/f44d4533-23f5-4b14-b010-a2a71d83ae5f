import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-admin-view-employee',
  templateUrl: './admin-view-employee.component.html',
  styleUrls: ['./admin-view-employee.component.css']
})
export class AdminViewEmployeeComponent implements OnInit {

  id!: number
  employee!: Employee
  constructor(private route: ActivatedRoute, private employeService: EmployeeService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.employee = new Employee();
    this.employeService.getEmployeeById(this.id).subscribe( data => {
      this.employee = data;
    });
  }

}