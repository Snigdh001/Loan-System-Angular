
import { ViewEncapsulation } from '@angular/compiler';
import { Component, Input } from '@angular/core';
import { EmailValidator, NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Route, Router } from '@angular/router';
import { regValidation } from '../validation';
import { errorInterface } from "../Interface";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../../assets/css/style.css'],
})
export class LoginComponent {

  
  constructor(private auth: AuthService, private router: Router, private reg: regValidation) { }
  Errordata = { errorInterface }

  resetEr(name:string) {
    if(name=='emailEr') errorInterface.emailEr = ""
    if(name=='passwordEr') errorInterface.passwordEr = ""
  }
  onSubmitHandler(data: any) {

   
    let count=this.reg.validateAll(data)
    if (count==2) {
      console.log(count)
      this.auth.login(data).subscribe(res => {
        if (res.messages.success == "true") {
          const session = {
            id: res.messages.id,
            role: res.messages.role,
            isLoggedin: res.messages.success,
            authorization: res.messages.authorization,
          }
          localStorage.setItem("Session", JSON.stringify(session))
          this.router.navigate(['/admin'])
        }
        else if (res.messages.success == "false") {
          console.log("Wrong Credentials")
        }
      })
    }
    else {
      console.log("Check Your Details")
    }

  }
}


