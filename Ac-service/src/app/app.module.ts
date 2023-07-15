import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateDeviceComponent } from './create-device/create-device.component';
import { DeleteDeviceComponent } from './delete-device/delete-device.component';
import { ProductListComponent } from './product-list/product-list.component';
import { UpdateDeviceComponent } from './update-device/update-device.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CreateDeviceComponent,
    DeleteDeviceComponent,
    ProductListComponent,
    UpdateDeviceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
