import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-admin-employee',
  templateUrl: './admin-employee.component.html',
  styleUrls: ['./admin-employee.component.css']
})
export class AdminEmployeeComponent implements OnInit {
  employees: Employee[] | any;
  searchKeyword: string = '';

  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees(){
    this.employeeService.getEmployeesList().subscribe(data => {
      this.employees = data;
    });
  }
  navigateToAddEmployeePage() {
    this.router.navigate(['/admin-add-employee']);
  }
  
  employeeDetails(id: number){
    this.router.navigate(['admin-view-employee', id]);
  }

  updateEmployee(id: number){
    this.router.navigate(['admin-update-employee', id]);
  }

  deleteEmployee(id: number){
    this.employeeService.deleteEmployee(id).subscribe( data => {
      console.log(data);
      this.getEmployees();
      alert("successfully deleted");
    })
  }
  
  searchEmployees() {
    if (this.searchKeyword.trim() !== '') {
      const filteredEmployees = this.employees.filter((employee: Employee) =>
        employee.name.toLowerCase().includes(this.searchKeyword.toLowerCase()) ||
        employee.email.toLowerCase().includes(this.searchKeyword.toLowerCase()) ||
        employee.phoneNumber.includes(this.searchKeyword)
      );
      this.employees = filteredEmployees;
    } else {
      this.getEmployees();
    }
  }
  
}