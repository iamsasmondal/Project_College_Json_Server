import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DepartmentsComponent } from './departments/departments.component';
import { PressComponent } from './press/press.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import {AdminLoginGuard} from  './admin-login.guard';
import {AdminHomeGuard} from './admin-home.guard';
import {NavbarComponent} from './navbar/navbar.component';

import { registerContentQuery } from '@angular/core/src/render3';



const routes: Routes = [
{path:'navbar',component:NavbarComponent},
{path:'home', component:HomeComponent},
{path:'departments',component:DepartmentsComponent},
{path:'press',component:PressComponent},
{path:'contact',component:ContactComponent},
{path:'register',component:RegisterComponent},
{path:'admin-login',component:AdminLoginComponent},
{path:'admin-home',component:AdminHomeComponent, canActivate:[AdminLoginGuard], canDeactivate:[AdminHomeGuard]},
{path:'**',redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
