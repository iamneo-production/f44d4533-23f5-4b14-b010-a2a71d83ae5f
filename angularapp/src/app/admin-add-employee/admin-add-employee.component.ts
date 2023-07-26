import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Router } from '@angular/router';
import { Employee } from '../employee';

@Component({
  selector: 'app-admin-add-employee',
  templateUrl: './admin-add-employee.component.html',
  styleUrls: ['./admin-add-employee.component.css']
})
export class AdminAddEmployeeComponent implements OnInit {

  employee: Employee = new Employee();
  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveEmployee(){
    this.employeeService.createEmployee(this.employee).subscribe( data =>{
      console.log(data);
      this.goToEmployeeList();
    },
    error => console.log(error));
  }
  goToEmployeeList(){
    this.router.navigate(['/admin-employee']);
  }
  
  onSubmit(){
    console.log(this.employee);
    this.saveEmployee();
    alert("Employee created");
  }
}