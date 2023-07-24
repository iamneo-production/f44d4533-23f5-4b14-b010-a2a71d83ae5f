import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup | any;
  branch:string='';
  baseURL:string='';
  isAccessedFromAdmin: boolean =false;
  constructor(private formBuilder: FormBuilder,private http:HttpClient,private router: Router) {  
     
const start = window.location.href.indexOf('-') + 1;
const end = window.location.href.indexOf('.project');
this.branch = window.location.href.substring(start, end);
this.baseURL = `https://8080-${this.branch}.project.examly.io`;
  }
 
  register: any={};
 
  addregister(): void{
    if (this.signupForm.invalid) {
      this.signupForm.markAllAsTouched();
      return;
   }

   const url = `${this.baseURL}/register`;
   this.http.post(url, this.register)
  .subscribe(
    (createdUser: any) => {
      console.log('Register created:', createdUser);
      if (createdUser === null) {
        alert('Email or phone number already exists.');
      } else {
        this.router.navigate(['/login']);
        alert("Account created now you can login");
        console.log(this.register);
      }
    }
  );
  }
  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3), this.validateName]],
      email: ['', [Validators.required, Validators.email, this.validateEmail]],
      phone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), this.validatePhoneNumber]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required,]
    }, { validator: this.passwordMatchValidator });
  }
  validateName(control: AbstractControl): { [key: string]: boolean } | null {
    const name = control.value;
    const validNameRegex = /^[A-Za-z\s]+$/; // Matches only alphabets

    if (!validNameRegex.test(name)) {
      return { 'invalidName': true };
    }

    return null;
  }
  validatePhoneNumber(control: AbstractControl): { [key: string]: boolean } | null {
    const phoneNumber = control.value;
    const validPhoneNumberRegex = /^\d{10}$/; // Matches exactly 10 digits

    if (!validPhoneNumberRegex.test(phoneNumber)) {
      return { 'invalidPhoneNumber': true };
    }

    return null;
  }
  validateEmail(control: AbstractControl): { [key: string]: boolean } | null {
    const email = control.value;
    const validEmailRegex = /^[A-Za-z0-9]+@gmail\.com$/;// Matches email ending with @gmail.com

    if (!validEmailRegex.test(email)) {
      return { 'invalidEmail': true };
    }

    return null;
  }
  passwordMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    if (password !== confirmPassword) {
      return { 'passwordMismatch': true };
    }

    return null;
  }
  onSubmit() {
    if (this.signupForm.invalid) {
      this.signupForm.markAllAsTouched();
      return;
    }
    this.router.navigate(['/home']);
    console.log(this.signupForm.value);
  }
}