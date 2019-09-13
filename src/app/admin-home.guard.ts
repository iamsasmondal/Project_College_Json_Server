import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanDeactivate,ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import {AdminHomeComponent} from '../app/admin-home/admin-home.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminHomeGuard implements  CanDeactivate<AdminHomeComponent>{
  constructor(private router: Router){}

  canDeactivate():boolean{
    
    if(window.confirm("Are you sure")==true){
      localStorage.removeItem("loginSuccess");
      return true;
    }
   return false;
  }
  
}
