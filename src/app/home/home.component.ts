import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  
  constructor(private http:Http) { }
  
  


  ngOnInit() {
   
    
  }

}
