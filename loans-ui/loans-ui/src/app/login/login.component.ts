import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  emailID: any;
  password: any;

  constructor() { }

  ngOnInit(): void {
  }

  login(formData : NgForm){
    const loginData = {
      'emailID' : formData.value.emailID,
      'password': formData.value.password
    };
    console.log("FROM .TS FILE "+ loginData);
  }

}
