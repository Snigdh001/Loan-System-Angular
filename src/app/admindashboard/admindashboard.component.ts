import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { allUserApi, allUserRes } from "../Interface";
import { range } from 'rxjs';
import { ExportToCsv } from 'export-to-csv'; 

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css', '../../../src/assets/css/style.css', '../../../src/assets/css/bootstrap.min.css', '../../../src/assets/css/boxicons.min.css']
  // <link href="static/css/bootstrap.min.css" rel="stylesheet">
  // <link href="static/css/boxicons.min.css" rel="stylesheet">
  // <link href="" rel="stylesheet">
})
export class AdmindashboardComponent implements OnInit {
  constructor(private auth: AuthService) { }
  ngOnInit(): void {
    this.auth.allRegisterUser(this.page, this.recordLimit).subscribe(res => { this.data = res, this.totalpages = res.totalpages, this.noOfPage() })
  }
  data: allUserApi = {
    status: 0,
    error: '',
    data: [],
    totalpages: 1
  }
  page = 1
  totalpages = 1
  recordLimit = 10
  pageRange: any = []

  
  setRecordLimit(event: Event) {
    
    this.recordLimit = +(event.target as HTMLSelectElement).value
    this.auth.allRegisterUser(1, this.recordLimit).subscribe(res => {this.data = res, this.totalpages = res.totalpages, this.noOfPage(),this.page=1
    })
  }
  setPageNo(pg:number)
  {
    this.page=pg
    this.auth.allRegisterUser(this.page, this.recordLimit).subscribe(res => {this.data = res, this.totalpages = res.totalpages,this.noOfPage()
    })
    
  }
  noOfPage() // Generating Array for Pagination
  {
    this.pageRange = []
    for (var i = 1; i <= this.totalpages; i++) 
    {this.pageRange.push(i)}
  }
  toggle() //SideBAr Toggle
  {
    var element = document.getElementById("accordionSidebar");
    var body = document.getElementById("body");
    element?.classList.toggle("toggled");
    body?.classList.toggle("sidebar-toggled");
    
  }

  ExportToCsv()
  {
    const options = { 
      filename:'Register User List',
      quoteStrings: '"',
      decimalSeparator: '.',
      showLabels: true, 
      useTextFile: false,
      useBom: true,
      headers: ['ID', 'First Name', 'Last Name', 'Email', 'Mobile', 'Role'], 
    };
    const csvExporter = new ExportToCsv(options);
    csvExporter.generateCsv(this.data.data);
  }
}
