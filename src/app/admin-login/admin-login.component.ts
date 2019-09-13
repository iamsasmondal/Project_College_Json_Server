import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  private checkvalid:boolean=false;

  constructor(private router: Router) { }
  redir(value: any){
    // The parameter "value" contains the entire form data, i.e. the values in the username and text fields
    // The field values can then be accessed using their names "uid" and "pwd"

    // Checking for blank fields submission
    // If not blank or null (in case the fields are "reset"), the userid is stored in the local computer's browser cache
    // The current user is then logged in and redirected to the welcome page
    this.checkvalid=true;
    if((value.uid=='saikat' ) && (value.pwd !='123' && value.pwd!='')){

      alert('Incorrect Input');
    }
    else if((value.uid!='saikat' && value.uid!='' ) && (value.pwd =='123')){
      alert('Incorrect Input');
      
    }
    else if((value.uid=='saikat' ) && (value.pwd =='123')){
      localStorage.setItem("loginSuccess","1") ;
     
      this.router.navigate(['admin-home']);
    }
    
    // If any one of the fields are empty on "submission", alert is shown
   
    
  }

  ngOnInit() {
    
  }

}
