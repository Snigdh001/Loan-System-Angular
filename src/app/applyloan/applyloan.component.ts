import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Toast, ToastrService } from 'ngx-toastr';
import { Route, Router } from '@angular/router';
import { regValidation } from '../validation';
import { count } from 'rxjs';
import { errorInterface, loanError } from '../Interface';

@Component({
  selector: 'app-applyloan',
  templateUrl: './applyloan.component.html',
  styleUrls: ['./applyloan.component.css']
})
export class ApplyloanComponent {
  constructor(private auth: AuthService, private toast: ToastrService, private navigater: Router, private reg: regValidation) {
    const Session = localStorage.getItem('Session')
    if (Session) {

      this.userData = {
        fname: JSON.parse(Session).fname,
        lname: JSON.parse(Session).lname,
        mobile: JSON.parse(Session).mobile,
        email: JSON.parse(Session).email,
        userid: JSON.parse(Session).id,
      }
    }

  }
  Errordata = { loanError }
  userData: any = {}

  onSubmitHandler(data: any) {
    data = { ...data, ...this.userData }
    let result = this.reg.validateAll(data)
    console.log(result)
    if (result == 15) {
      this.auth.ApplyLoan(data).subscribe(res => {
        if (res.success === 'false' && res.status == 409) {
          this.toast.error('You can\'t apply : ( </br> You had previous pending loan request  ', 'Failed', { progressBar: true,timeOut:10000 ,enableHtml:true});

          this.navigater.navigate(['/user'])
        }
        else
        if (res.success === 'false') {
          this.toast.error("Failed")
          this.navigater.navigate(['/user'])
        }
        else {
          this.toast.success("Application Submit Successfully")
          this.navigater.navigate(['/user'])
        }
      })
    }
    else
      this.toast.warning('Wrong Input Credentials', 'Failed', { progressBar: true });



  }

}
