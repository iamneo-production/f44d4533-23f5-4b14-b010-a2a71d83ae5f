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
import { AdminViewDeviceComponent } from './admin-view-device/admin-view-device.component';
import { AdminUpdateDeviceComponent } from './admin-update-device/admin-update-device.component';
import { AdminAddDeviceComponent } from './admin-add-device/admin-add-device.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path:'', redirectTo:'/login',pathMatch:'full'},
  { path:'home', component:HomeComponent,canActivate:[AuthGuard]},
  { path:'aboutus', component:AboutusComponent,canActivate:[AuthGuard]},
  { path:'contactus', component:ContactusComponent,canActivate:[AuthGuard]},
  { path:'signup', component:SignupComponent},
  { path:'login', component:LoginComponent},
  { path:'logout', component:LogoutComponent},
  {path:'profile',component:ProfileComponent,canActivate:[AuthGuard]},
  {path:'forgot-password',component:ForgotPasswordComponent},
  {path:'booking-list',component:BookingListComponent,canActivate:[AuthGuard]},
  {path:'create-booking',component:CreateBookingComponent,canActivate:[AuthGuard]},
  {path:'update-booking/:id',component:UpdateBookingComponent,canActivate:[AuthGuard]},
  {path:'booking-details/:id',component:BookingDetailsComponent,canActivate:[AuthGuard]},
  {path:'admin-dashboard',component:AdminDashboardComponent,canActivate:[AuthGuard]},
  {path:'admin-customers',component:AdminCustomersComponent,canActivate:[AuthGuard]},
  {path:'admin-device',component:AdminDeviceComponent,canActivate:[AuthGuard]},
  {path:'admin-repair',component:AdminRepairComponent,canActivate:[AuthGuard]},
  {path:'admin-employee',component:AdminEmployeeComponent,canActivate:[AuthGuard]},
  {path:'employee-login',component:EmployeeLoginComponent},
  {path:'customer-bookings',component:CustomerBookingsComponent,canActivate:[AuthGuard]},
  {path:'admin-add-employee',component:AdminAddEmployeeComponent,canActivate:[AuthGuard]},
  {path:'admin-update-employee/:id',component:AdminUpdateEmployeeComponent,canActivate:[AuthGuard]},
  {path:'admin-view-employee/:id',component:AdminViewEmployeeComponent,canActivate:[AuthGuard]},
  {path:'admin-view-repair/:id',component:AdminViewRepairComponent,canActivate:[AuthGuard]},
  {path:'admin-view-device/:id',component:AdminViewDeviceComponent,canActivate:[AuthGuard]},
  {path:'admin-update-device/:id',component:AdminUpdateDeviceComponent,canActivate:[AuthGuard]},
  {path:'admin-add-device',component:AdminAddDeviceComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
