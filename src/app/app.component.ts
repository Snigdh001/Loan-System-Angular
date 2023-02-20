import { style } from '@angular/animations';
import { Component, Input, Output, ViewEncapsulation } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css','../../src/assets/css/bootstrap.min.css','../../src/assets/css/boxicons.min.css','../../src/assets/css/style.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    constructor(private toastr: ToastrService) { this.status() }


  loginStatus = false
name=''
  nameRole = 'user'
  status() {
    console.log("Called")
    const session = localStorage.getItem("Session")
    if (session) {
      const sessionData=JSON.parse(session)
      
      this.loginStatus = sessionData.isLoggedin
      this.name=sessionData.name
      this.nameRole=sessionData.role

    }
    else
      this.loginStatus = false

  }
  
  logout() {
    localStorage.removeItem('Session')
    this.toastr.success('Logged Out Successfully', 'Success', { progressBar: true });
    this.status()
    return true
  }
}
