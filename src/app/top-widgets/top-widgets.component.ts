import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import {
  faLocation,
  faShop,
  faBoxes,
  faMoneyBill,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-top-widgets',
  templateUrl: './top-widgets.component.html',
  styleUrls: ['./top-widgets.component.scss']
})
export class TopWidgetsComponent implements OnInit {

  showMessage:boolean = false;

  showData(){
    this.showMessage =true
  }
  @Input() Datawidget="";


  faLocation = faLocation;
  faShop = faShop;
  faBoxes = faBoxes;
  faMoneyBill = faMoneyBill;

  myEvent= new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}