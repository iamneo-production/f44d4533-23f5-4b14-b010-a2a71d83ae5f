import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { CreateBookingComponent } from './create-booking/create-booking.component';
import { UpdateBookingComponent } from './update-booking/update-booking.component';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { BookingListComponent } from './booking-list/booking-list.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminCustomersComponent } from './admin-customers/admin-customers.component';
import { AdminDeviceComponent } from './admin-device/admin-device.component';
import { AdminRepairComponent } from './admin-repair/admin-repair.component';
import { AdminEmployeeComponent } from './admin-employee/admin-employee.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { CustomerBookingsComponent } from './customer-bookings/customer-bookings.component';
import { AdminAddEmployeeComponent } from './admin-add-employee/admin-add-employee.component';
import { AdminUpdateEmployeeComponent } from './admin-update-employee/admin-update-employee.component';
import { AdminViewEmployeeComponent } from './admin-view-employee/admin-view-employee.component';
import { AdminViewRepairComponent } from './admin-view-repair/admin-view-repair.component';

const routes: Routes = [
  {path:'', redirectTo:'/login',pathMatch:'full'},
  { path:'home', component:HomeComponent},
  { path:'aboutus', component:AboutusComponent},
  { path:'contactus', component:ContactusComponent},
  { path:'signup', component:SignupComponent},
  { path:'login', component:LoginComponent},
  { path:'logout', component:LogoutComponent},
  {path:'profile',component:ProfileComponent},
  {path:'forgot-password',component:ForgotPasswordComponent},
  {path:'booking-list',component:BookingListComponent},
  {path:'create-booking',component:CreateBookingComponent},
  {path:'update-booking/:id',component:UpdateBookingComponent},
  {path:'booking-details/:id',component:BookingDetailsComponent},
  {path:'admin-dashboard',component:AdminDashboardComponent},
  {path:'admin-customers',component:AdminCustomersComponent},
  {path:'admin-device',component:AdminDeviceComponent},
  {path:'admin-repair',component:AdminRepairComponent},
  {path:'admin-employee',component:AdminEmployeeComponent},
  {path:'employee-login',component:EmployeeLoginComponent},
  {path:'customer-bookings',component:CustomerBookingsComponent},
  {path:'admin-add-employee',component:AdminAddEmployeeComponent},
  {path:'admin-update-employee/:id',component:AdminUpdateEmployeeComponent},
  {path:'admin-view-employee/:id',component:AdminViewEmployeeComponent},
  {path:'admin-view-repair/:id',component:AdminViewRepairComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
