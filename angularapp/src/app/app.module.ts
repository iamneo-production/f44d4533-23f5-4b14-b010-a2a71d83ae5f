import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { CreateBookingComponent } from './create-booking/create-booking.component';
import { ContactusComponent } from './contactus/contactus.component';
import { BookingListComponent } from './booking-list/booking-list.component';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { UpdateBookingComponent } from './update-booking/update-booking.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminCustomersComponent } from './admin-customers/admin-customers.component';
import { AdminDeviceComponent } from './admin-device/admin-device.component';
import { AdminRepairComponent } from './admin-repair/admin-repair.component';
import { AdminEmployeeComponent } from './admin-employee/admin-employee.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { CustomerBookingsComponent } from './customer-bookings/customer-bookings.component';
import { EmployeeNavbarComponent } from './employee-navbar/employee-navbar.component';
import { AdminAddEmployeeComponent } from './admin-add-employee/admin-add-employee.component';
import { AdminUpdateEmployeeComponent } from './admin-update-employee/admin-update-employee.component';
import { AdminViewEmployeeComponent } from './admin-view-employee/admin-view-employee.component';
import { AdminViewRepairComponent } from './admin-view-repair/admin-view-repair.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    LogoutComponent,
    NavbarComponent,
    FooterComponent,
    ForgotPasswordComponent,
    CreateBookingComponent,
    ContactusComponent,
    BookingListComponent,
    BookingDetailsComponent,
    ProfileComponent,
    AboutusComponent,
    UpdateBookingComponent,
    AdminNavbarComponent,
    AdminDashboardComponent,
    AdminCustomersComponent,
    AdminDeviceComponent,
    AdminRepairComponent,
    AdminEmployeeComponent,
    EmployeeLoginComponent,
    CustomerBookingsComponent,
    EmployeeNavbarComponent,
    AdminAddEmployeeComponent,
    AdminUpdateEmployeeComponent,
    AdminViewEmployeeComponent,
    AdminViewRepairComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
