import { Component } from '@angular/core';
import { allApplicationApi, allUserApi } from '../Interface';
import { AuthService } from '../services/auth.service';
import { ExportToCsv } from 'export-to-csv';

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
  pageRange: any = []
  key = ""
  currentdata:any={}
  
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
  onSearchApplication(key: any) {
    console.log(this.page, this.recordLimit, key['keyWord'])
    this.key = key['keyWord']
    this.auth.searchApplcation(this.page, this.recordLimit, key['keyWord']).subscribe(res => {
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
  UpdateStatus(data:any)
  {
    console.log(data)

    this.auth.updateStatus(data).subscribe(res =>{console.log(res)})
    // this.onSearchApplication()
  }
  currentDetail(data:any){
    this.currentdata=data
  }
}
