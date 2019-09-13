import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginGuard implements  CanActivate{
  
  constructor(private router: Router){}
  canActivate():boolean{
    if(localStorage.getItem("loginSuccess")=="1"){
      return true;
    }
  this.router.navigate(['admin-login']);
   return false;
  }
  
}


