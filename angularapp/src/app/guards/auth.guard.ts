import { Injectable } from "@angular/core";
import {  CanActivate, Router } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../services/auth.service";

@Injectable({
  providedIn:'root'
})

export class AuthGuard implements CanActivate{
  constructor(private auth: AuthService, private router:Router){

  }
  canActivate() {
      if(this.auth.IsLoggedIn()){
        return true;
      }
      this.router.navigate(['/login']);
      alert("User not logged in")
      return false;
  }
}