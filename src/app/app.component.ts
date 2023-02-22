import { style } from '@angular/animations';
import { Component, Input, Output, ViewEncapsulation } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', '../../src/assets/css/bootstrap.min.css', '../../src/assets/css/boxicons.min.css', '../../src/assets/css/style.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  constructor(private toastr: ToastrService) { this.status() }


  sessionDetails={
    
    loginStatus : false,
    name : '',
    role : '',
    email : '',
    mobile:'',
    id:''
  }
  status() {
    // console.log("Called")
    const session = localStorage.getItem("Session")
    if (session) {
      const sessionData = JSON.parse(session)

      this.sessionDetails.loginStatus = sessionData.isLoggedin
      this.sessionDetails.name = sessionData.name
      this.sessionDetails.role = sessionData.role
      this.sessionDetails.email = sessionData.mobile
      this.sessionDetails.mobile = sessionData.email
      this.sessionDetails.id = sessionData.id

    }
    else
      this.sessionDetails.loginStatus = false
  }


  logout() {
    localStorage.removeItem('Session')
    this.toastr.success('Logged Out Successfully', 'Success', { progressBar: true });
    this.status()
    return true
  }
}
