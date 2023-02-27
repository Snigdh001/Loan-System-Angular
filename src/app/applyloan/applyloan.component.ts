import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Toast, ToastrService } from 'ngx-toastr';
import { Route, Router } from '@angular/router';
import { regValidation } from '../validation';
import { count } from 'rxjs';
import { allApplicationRes, errorInterface, loanError } from '../Interface';

@Component({
  selector: 'app-applyloan',
  templateUrl: './applyloan.component.html',
  styleUrls: ['./applyloan.component.css']
})
export class ApplyloanComponent {
  constructor(private auth: AuthService, private toast: ToastrService, private navigater: Router, private reg: regValidation) {
    const Session = localStorage.getItem('Session')
    if (Session) {
      this.userData.fname =JSON.parse(Session).fname;
      this.userData.lname =JSON.parse(Session).lname;
      this.userData.email =JSON.parse(Session).email;
      this.userData.mobile =JSON.parse(Session).mobile;
      this.userData.userid =JSON.parse(Session).id;
    }

  }
  Errordata = { loanError }
  userData: typeof allApplicationRes = allApplicationRes

  onSubmitHandler(data: typeof allApplicationRes) {
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
