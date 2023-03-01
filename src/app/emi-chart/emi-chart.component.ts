import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { emiDetailsRes } from '../Interface';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-emi-chart',
  templateUrl: './emi-chart.component.html',
  styleUrls: ['./emi-chart.component.css']
})
export class EmiChartComponent implements OnInit {
  constructor(private auth: AuthService, private toast:ToastrService) { 
    }
  ngOnInit(): void {
    let loanid=localStorage.getItem('loanid')
    if(loanid)
    this.auth.setEmiDetails(+loanid).subscribe(res => {
      this.emiDetails = res[0]
      this.noOfPage()
    })
  }
  emiDetails: typeof emiDetailsRes = emiDetailsRes
  // emipaid=0
  monthRange: Array<string> = []
  statusRange: Array<string> = []
  EmiStatus: Array<boolean> = []
  status = ""
  loanid=0

  noOfPage() // Generating Array for Pagination
  {
   
    var date = new Date(this.emiDetails['startDate'])
    let emipaid=this.emiDetails['emiPaid']
    for (let i = 0; i < this.emiDetails['duration']; i++) {
      if(i<emipaid)
      {
        date.setMonth(date.getMonth() + 1)
        // this.statusRange.push("paid")
        // this.EmiStatus.push(true)
        // this.monthRange.push(date.toLocaleString().slice(0, 10))
      }
      else{

        date.setMonth(date.getMonth() + 1)
        this.EmiStatus.push(false)
        this.statusRange.push("unpaid")
        this.monthRange.push(date.toLocaleString().slice(0, 10))
      }

    }
  }

  paidStatus(i: number,id:number) {
    this.EmiStatus[i] = true;
    this.statusRange[i] = "paid"
    this.auth.setEmiPaidStatus(id).subscribe(res=>{ console.log(res)})
    this.toast.success(this.monthRange[i]+ " EMI Has Paid")
  }
}
