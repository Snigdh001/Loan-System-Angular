import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { EmailValidator, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { signupInterface, errorInterface } from '../Interface';
import { regValidation } from '../validation';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css', '../../assets/css/style.css']
})


export class SignupComponent {
  constructor(private auth: AuthService, private router: Router, private reg: regValidation,private toast:ToastrService) { }
  Errordata = { errorInterface }
  
  resetEr(name: string) {
    if (name == 'fnameEr') errorInterface.fnameEr = ""
    if (name == 'lnameEr') errorInterface.lnameEr = ""
    if (name == 'emailEr') errorInterface.emailEr = ""
    if (name == 'mobileEr') errorInterface.mobileEr = ""
    if (name == 'passwordEr') errorInterface.passwordEr = ""
    if (name == 'cpasswordEr') errorInterface.cpasswordEr = ""
  }

  onSubmitHandler(data: typeof signupInterface) {
    let count = this.reg.validateAll(data)
    console.log(count)
    if (data.cpassword === data.password && count === 6) {
      const info = {
        fname: data.fname, lname: data.lname, email: data.email, mobile: data.mobile, password: data.password
      }
      this.auth.signUp(info).subscribe(res => {
        if (res.messages.success === 'true') {
          this.toast.success("Account Successful Created")
          // console.log("Account Successful Created")

          this.router.navigate(["/login"])
        }
        else {
          this.toast.error("Account Already Exist")
          // console.log("Account Already Exist")
        }
      })
    }
    else {this.toast.error("Failed");
    //  console.error("Failed")
     }

  }
  
}
