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
  myApplcationRequest()
   {
    this.auth.LoanApplicationById(this.appObj.sessionDetails.id).subscribe(res =>{console.log(res); this.data=res})
   }
   currentDetail(data:any){
    this.currentdata=data
  }
}


