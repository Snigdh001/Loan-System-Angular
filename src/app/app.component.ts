import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template:`<input >
  //   <button class="btn btn-primary">click</button>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app';
  asd = false;
  constructor(){
    setTimeout(()=>{this.asd=true},2000)
  }
  onClickHandler(evt:Event){
    console.log(evt)
  }
}
