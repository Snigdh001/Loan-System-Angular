import { Component } from '@angular/core';
import { allApplicationApi, allApplicationRes, allUserApi } from '../Interface';
import { AuthService } from '../services/auth.service';
import { ExportToCsv } from 'export-to-csv';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-loan-application',
  templateUrl: './loan-application.component.html',
  styleUrls: ['./loan-application.component.css']
})
export class LoanApplicationComponent {
  constructor(private auth: AuthService) { }
  ngOnInit(): void {
    this.auth.searchApplcation(this.page, this.recordLimit, this.key).subscribe(res => { this.data = res, this.totalpages = res.totalpages, this.noOfPage() })

  }
  data: allApplicationApi = {
    status: 0,
    error: '',
    data: [],
    totalpages: 1
  }
  page = 1
  totalpages = 1
  recordLimit = 5
  pageRange: Array<number> = []
  key = ""
  currentdata:typeof allApplicationRes=allApplicationRes
  
  noOfPage() // Generating Array for Pagination
  {
    this.pageRange = []
    for (var i = 1; i <= this.totalpages; i++) { this.pageRange.push(i) }
  }
  toggle() //SideBAr Toggle
  {
    var element = document.getElementById("accordionSidebar");
    var body = document.getElementById("body");
    element?.classList.toggle("toggled");
    body?.classList.toggle("sidebar-toggled");

  }

  setRecordLimit(event: Event) {

    this.recordLimit = +(event.target as HTMLSelectElement).value
    this.auth.searchApplcation(1, this.recordLimit, this.key).subscribe(res => {
      this.data = res, this.totalpages = res.totalpages, this.noOfPage(), this.page = 1
    })
  }
  setPageNo(pg: number) {
    this.page = pg
    this.auth.searchApplcation(this.page, this.recordLimit, this.key).subscribe(res => {
      this.data = res, this.totalpages = res.totalpages, this.noOfPage()
    })

  }
  onSearchApplication(key: string) {

    this.key = key
    this.auth.searchApplcation(this.page, this.recordLimit, key).subscribe(res => {
      this.data = res, this.totalpages = res.totalpages, this.noOfPage(), this.page = 1
    })
  }
  ExportToCsv() {
    const options = {
      filename: 'Loan Application List',
      quoteStrings: '"',
      decimalSeparator: '.',
      showLabels: true,
      useTextFile: false,
      useBom: true,
    
    };
    const csvExporter = new ExportToCsv(options);
    csvExporter.generateCsv(this.data.data);
  }
   UpdateStatus(data:NgForm)
  {

     this.auth.updateStatus(data).subscribe(res =>{this.ngOnInit()})
    
  }
  currentDetail(data:typeof allApplicationRes){
    this.currentdata=data
  }
}
