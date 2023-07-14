import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  showWidgets:boolean = false;

  showWidgetss(){
    this.showWidgets =true
  }

  @Input() DataFromParent="";

  DataFromWidget ="";

  getData(data: any) {

    console.log(data);
    this.DataFromWidget = data;
  }

}
