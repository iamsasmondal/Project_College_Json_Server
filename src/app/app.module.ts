import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { from } from 'rxjs';
import {NgForm} from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { DepartmentsComponent } from './departments/departments.component';
import { PressComponent } from './press/press.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { ChangeTextDirective } from './change-text.directive';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { NavbarComponent } from './navbar/navbar.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DepartmentsComponent,
    PressComponent,
    ContactComponent,
    RegisterComponent,
    ChangeTextDirective,
    AdminLoginComponent,
    AdminHomeComponent,
    NavbarComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
