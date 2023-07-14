import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-left-last-widget',
  templateUrl: './left-last-widget.component.html',
  styleUrls: ['./left-last-widget.component.scss']
})
export class LeftLastWidgetComponent {
  // constructor(){
  // setTimeout(() =>{
  //   this.myEvent.emit(this.DateFromWidget)
  // },2000)

  // }

  DateFromWidget = "This Message from Widget "

  @Output() myEvent = new EventEmitter();

  fire(){
    this.myEvent.emit(this.DateFromWidget)
  }
}
