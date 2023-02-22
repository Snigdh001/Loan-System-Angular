import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AppComponent } from '../app.component';
import { allUserApi } from '../Interface';

@Component({
  selector: 'app-user-loan-application',
  templateUrl: './user-loan-application.component.html',
  styleUrls: ['./user-loan-application.component.css']
})
export class UserLoanApplicationComponent {


  constructor( private auth:AuthService, private appObj:AppComponent){this.myApplcationRequest() }
  data :any = []
  currentid=""
  currentdata:any={}
  wid=100;
  myApplcationRequest()
   {
    this.auth.LoanApplicationById(this.appObj.sessionDetails.id).subscribe(res =>{console.log(res); this.data=res})
   }
   currentDetail(data:any){
    this.currentdata=data
  }
  status()
  {
    switch(this.currentdata.status)
    {
      case 'pending':
        this.wid=10
        break
      case 'approved':
        this.wid=30
        break
      case 'pending':
        this.wid=10
        break
      case 'rejected':
        this.wid=20
        break
      case 'verification failed':
          this.wid=40
          break
      case 'verified':
        this.wid=50
        break
      case 'Sanctioned':
        this.wid=70
        break
      case 'disbursed':
        this.wid=90
        break
      case 'closed':
          this.wid=100
          break
    }
  }
}


