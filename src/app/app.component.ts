import { Component, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // encapsulation:ViewEncapsulation.None
})
export class AppComponent {
  
  title = 'angular-app';

  asd = true;
  onClickHandler(evt:Event){
    console.log(this.title)
  }
  onChangeHandler(e:Event){
    this.title = (e.currentTarget as HTMLInputElement).value;
  }
}
