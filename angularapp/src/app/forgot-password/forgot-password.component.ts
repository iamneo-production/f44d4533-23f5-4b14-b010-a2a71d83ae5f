import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent  {
  forgotForm: FormGroup | any;
  email: any;
  password: any;
  
  constructor(private formBuilder: FormBuilder,private router: Router,private http:HttpClient) { }
  forgetPassword() { 
    if (this.forgotForm.invalid) {
      this.forgotForm.markAllAsTouched();
      return;
   }
   const url = 'https://8080-fcefddbaffdeffacdcbbcecdcebafeccfa.project.examly.io/register/forgetpassword';
  const options = {
    params: {
      email: this.email,
      newPassword: this.password
    }
  };

  this.http.post(url, null, { params: options.params, responseType: 'text' })
  .subscribe(
    response => {
      console.log('Password changed successfully:', response);
      if (response === 'Email not found. Password reset failed.') {
        alert('Email not found. Password reset failed.');
      } else {
        alert("Password successfully reseted")
        this.router.navigate(['/login']);
      }
    },
    error => {
      console.log('Error:', error);
    }
  );
}

  ngOnInit() {
    this.forgotForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email, this.validateEmail]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required,]
    }, { validator: this.passwordMatchValidator });
  }


  validateEmail(control: AbstractControl): { [key: string]: boolean } | null {
    const email = control.value;
    const validEmailRegex = /^[A-Za-z0-9]+@gmail\.com$/;
; // Matches email ending with @gmail.com

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
    if (this.forgotForm.invalid) {
      this.forgotForm.markAllAsTouched();
      return;
    }
    alert(" Password reset successful!")
    this.router.navigate(['/home']);
    console.log(this.forgotForm.value);
  }
}