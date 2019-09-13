import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { FormGroup, FormControl } from '@angular/forms';
import { from } from 'rxjs';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  constructor(private http: Http) {}
  confirmationString:string = "You have registered successfully";
  isRegistered: boolean = false;
  studentObj:object = {};

  
  regStudent=function(register:any){
    
    if(register.name==""||register.marks=="")
    {
    alert("Please Enter Your Details");
    return false;
    }
    else
    this.studentObj={
      "name":register.name,
      "address" : register.address,
      "marks" : register.marks,
      "board" : register.board,
      "stream" :register.stream
    }


    this.http.post("http://localhost:3000/students",this.studentObj).subscribe((res:Response)=>{
    
    this.isRegistered = true;
    var resetForm=<HTMLFormElement>document.getElementById("studentForm");
    resetForm.reset();
    
    alert(this.confirmationString);
    
      
  }
  )
}


  ngOnInit() {

  }




}
