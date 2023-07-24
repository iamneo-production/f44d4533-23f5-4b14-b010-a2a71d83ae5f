import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent implements OnInit {
  EmployeeloginForm: FormGroup | any;
  email: any;
  branch:string='';
  baseURL:string='';
  loginError: boolean = false;
  constructor(private formBuilder: FormBuilder,private http:HttpClient,private router: Router) {  
     
    const start = window.location.href.indexOf('-') + 1;
    const end = window.location.href.indexOf('.project');
    this.branch = window.location.href.substring(start, end);
    this.baseURL = `https://8080-${this.branch}.project.examly.io`;
      }

  ngOnInit() {
    this.EmployeeloginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email, this.validateEmail]]
    });
  }
  validateEmail(control: AbstractControl): { [key: string]: boolean } | null {
    const email = control.value;
    const validEmailRegex = /^[a-zA-Z0-9]+@gmail\.com$/; // Matches email ending with @gmail.com

    if (!validEmailRegex.test(email)) {
      return { 'invalidEmail': true };
    }
    return null;
  }


  AdminonSubmit() {
    if (this.EmployeeloginForm.invalid) {
      this.EmployeeloginForm.markAllAsTouched();
      return;
    }
    const email = this.EmployeeloginForm.get('email')?.value;
    const password = this.EmployeeloginForm.get('password')?.value;

    this.http.get<any[]>('https://8080-effcecdcddaadadeffacdcbbcecdcebafeccfa.project.examly.io/employees').subscribe(data => {
      const matchingEmployee = data.find(employee => employee.email === email);
      if (matchingEmployee) {
        // Successful login, redirect to employee dashboard or desired page
        localStorage.setItem('loggedInStatus','loggedIn');
        alert("Loggedin Successfully");
        this.router.navigate(['/customer-bookings']);
        console.log('true');
      } else {
        // Invalid login, display error message
        this.loginError = true;
        alert("Invalid email or password");
        console.log('error');
      }
      
    });
  }
    
  }