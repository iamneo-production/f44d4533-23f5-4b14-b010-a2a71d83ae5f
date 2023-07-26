import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup | any;
  AdminloginForm: FormGroup | any;
  email: any;
  password: any;
  branch:string='';
  baseURL:string='';
  loginError: boolean = false;
  constructor(private formBuilder: FormBuilder,private http:HttpClient,private router: Router) {  
    const start = window.location.href.indexOf('-') + 1;
    const end = window.location.href.indexOf('.project');
    this.branch = window.location.href.substring(start, end);
    this.baseURL = `https://8080-${this.branch}.project.examly.io`;
      }
  addlogin(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    const url = `${this.baseURL}/register/${this.email}/${this.password}`;
    this.http.get<any>(url).subscribe(
      (response: any) => {
        const status = response.status;
        const customerId = response.customerId;
        if (status === 1) {
          localStorage.setItem('loggedInStatus', 'loggedIn');
          localStorage.setItem('customerId', customerId.toString());
          this.router.navigate(['/home']);
          console.log("logged in successful")
          alert("Logged in Successfully!");
        } else {
          console.log("Login not successful");
          alert("Invalid User!");
        }
      },
      (error) => {
        if (error.status === 404) {
          alert("Invalid User!");
          console.log("Login not successful");
          // Hide the error message for 404 status
          return;
        }
        alert("Invalid User!!");
        console.log("Login not successful");
        console.error('Error logging in:', error);
      }
    );
  }
 
  
  
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email, this.validateEmail]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
    this.AdminloginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email, this.validateEmail]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }
  validateEmail(control: AbstractControl): { [key: string]: boolean } | null {
    const email = control.value;
    const validEmailRegex = /^[A-Za-z0-9]+@gmail\.com$/;
 // Matches email ending with @gmail.com

    if (!validEmailRegex.test(email)) {
      return { 'invalidEmail': true };
    }

    return null;
  }


  AdminonSubmit() {
    if (this.AdminloginForm.invalid) {
      this.AdminloginForm.markAllAsTouched();
      return;
    }
    const email = this.AdminloginForm.get('email')?.value;
    const password = this.AdminloginForm.get('password')?.value;

    if (email === 'admin@gmail.com' && password === '12345678') {
      // Successful login, navigate to the admin dashboard or desired page
      this.router.navigate(['/admin-dashboard']);
      alert("Loggedin Successfully");
      localStorage.setItem('loggedInStatus','loggedIn');
      console.log('true');
    } else {
      // Invalid login, display error message
      this.loginError = true;
      alert("Invalid email or password");
      console.log('error');
    }
   
  }
    
  }
  
