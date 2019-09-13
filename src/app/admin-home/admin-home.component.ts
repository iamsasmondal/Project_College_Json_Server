import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Http, Response, Headers } from '@angular/http';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  constructor(private http:Http,private route:Router) { }

  students=[];
  fetchData=function(){
    this.http.get("http://localhost:3000/students").subscribe((res:Response)=>{
        this.students=res.json();
      }
    )
  }

  logout(){
    localStorage.removeItem("loginSuccess");
    this.route.navigate(['/admin-login']);
  }

  ngOnInit() {
    this.fetchData();
  }

}
