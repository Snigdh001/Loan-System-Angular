
import { ViewEncapsulation } from '@angular/compiler';
import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css','../../assets/css/style.css'],
})
export class LoginComponent {
  
  constructor(private auth:AuthService , private router:Router) { }
  email=''
  password=''
  baseurl="http://localhost/snigdh_ci4/api";

  // {status: 200, error: null, messages: {…}}error: nullmessages: authorization: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJBdXRob3JpemF0aW9uIiwiaWF0IjoxNjc2MDMyODc2LCJleHAiOjIwMzYwMzI4NzYsInRva2VuaWQiOiIxIn0.ZjOVeQbXLEYSFbYYGVSHXccp0eVqIjahQdn-uoN72DY"id: "1"message: "Login Successful"role: "admin"success: "true"[[Prototype]]: Objectstatus: 200[[Prototype]]: Object
  
  onSubmitHandler(data:any){

    
    this.auth.login(data).subscribe(res =>{
      if(res.messages.success=="true"){
        const session ={
          id:res.messages.id,
          role:res.messages.role,
          isLoggedin:res.messages.success ,
          authorization:res.messages.authorization ,
      }
        localStorage.setItem("Session",JSON.stringify(session))
        this.router.navigate(['/admin'])
      }
    })
    
    
  }
}


