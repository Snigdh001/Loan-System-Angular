
import { ViewEncapsulation } from '@angular/compiler';
import { Component, Input } from '@angular/core';
import { EmailValidator, NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Route, Router } from '@angular/router';
import { regValidation } from '../validation';
import { errorInterface } from "../Interface";
import { ToastrService } from 'ngx-toastr';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../../assets/css/style.css'],
})
export class LoginComponent {


  constructor(private auth: AuthService, private router: Router, private reg: regValidation, private toastr: ToastrService, private appObj: AppComponent) { }
  Errordata = { errorInterface }

  resetEr(name: string) {
    if (name == 'emailEr') errorInterface.emailEr = ""
    if (name == 'passwordEr') errorInterface.passwordEr = ""
  }
  onSubmitHandler(data: any) {
    let count = this.reg.validateAll(data)
    if (count == 2) {
      this.auth.login(data).subscribe(res => {
        if (res.messages.success == "true") {
          const session = {
            id: res.messages.id,
            email:res.messages.email,
            name:res.messages.name,
            mobile:res.messages.mobile,
            role: res.messages.role,
            isLoggedin: res.messages.success,
            authorization: res.messages.authorization,
          }
          localStorage.setItem("Session", JSON.stringify(session))
          this.appObj.status()
          this.toastr.success('Logged In Successfully', session.role, { progressBar: true });
          if (session.role === 'admin')
            this.router.navigate(['/admin'])
          else if (session.role === 'user')
            this.router.navigate(['/user'])

        }
        else if (res.messages.success == "false") {
          // console.log("Wrong Credentials")
          this.toastr.warning('Wrong Credentials', 'Failed', { progressBar: true });
        }
      })
    }
    else {
      // console.log("Check Your Details")
      this.toastr.error('Check Your Details', 'Failed', { progressBar: true });
    }

  }
}


