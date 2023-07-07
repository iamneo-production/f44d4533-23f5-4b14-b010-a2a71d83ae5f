import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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

  constructor(private formBuilder: FormBuilder,private router: Router,private http:HttpClient) { }
  addlogin():void{
    const url = `https://8080-fcefddbaffdeffacdcbbceeaeaadbdbabf.project.examly.io/register/${this.email}/${this.password}`;
    this.http.get<number>(url)
    .subscribe(createdUser =>{
      console.log(createdUser);
      if(createdUser==1)
      {
       alert("Login Sucessfully!");
       this.router.navigate(['/home']);
      }
      else
      {
        console.log("Login not sucessfull");
       alert("Invalid User!!");

      }

    });
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
    const validEmailRegex = /^[a-z0-9]+@gmail\.com$/;
 // Matches email ending with @gmail.com

    if (!validEmailRegex.test(email)) {
      return { 'invalidEmail': true };
    }

    return null;
  }

  onSubmit() {
    if (this.loginForm.invalid) {
       this.loginForm.markAllAsTouched();
       return;
    }
    this.router.navigate(['/home']);
    // Submit the form or perform further actions
    // console.log(this.loginForm.value);
  }
  AdminonSubmit() {
    if (this.AdminloginForm.invalid) {
      this.AdminloginForm.markAllAsTouched();
      return;
    }
    const email = this.AdminloginForm.value.email;
    const password = this.AdminloginForm.value.password;
    
    if (email === 'admin1@gmail.com' && password === '12345678' || email === 'admin2@gmail.com' && password === '87654321' ){
      this.router.navigate(['/dashboard']);
      console.log(this.AdminloginForm.value);
    } else {
      // Show an error message or perform any other action
      console.log('Invalid credentials');
      alert("Invalid email & password");
    }
  }
}
