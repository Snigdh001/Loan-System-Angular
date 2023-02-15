import { Component, Input, Output, ViewEncapsulation } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // encapsulation:ViewEncapsulation.None
})
export class AppComponent {

  constructor(private toastr:ToastrService){this.status()}
  loginStatus=false
  status()
  { console.log("Called")
    const session= localStorage.getItem("Session")
    if(session)
    {
      this.loginStatus=true
      console.log(this.loginStatus)
    }
  }
  logout()
  { 

    localStorage.removeItem('Session')
    this.toastr.success('Logged Out Successfully', 'Success',{progressBar:true});
    return true
  }



}
