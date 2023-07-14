import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-right-middle-widget',
  templateUrl: './right-middle-widget.component.html',
  styleUrls: ['./right-middle-widget.component.scss']
})
export class RightMiddleWidgetComponent implements OnInit {

  chart = new Chart({
    chart: {
      type: 'pie',
      height: 325
    },
    title: {
      text: 'Applications Types'
    },
    xAxis: {
      categories: [
        'Web app Builder',
        'Experience Builder',
        'Dashboard',
        'Native Web app',
        
      ]
    },
    yAxis: {
      title: {
        text: 'Revenue in %'
      }
    },
    series: [
     {
      type: 'pie',
      data: [
        {
          name: 'Web app Builder',
          y: 41.0,
          color: '#044342',
        },
        {
          name: 'Experience Builder',
          y: 33.8,
          color: '#7e0505',
        },
        {
          name: 'Dashboard',
          y: 6.5,
          color: '#ed9e20',
        },
        {
          name: 'Native Web app',
          y: 15.2,
          color: '#6920fb',
        },
        
        
      ]
     }
    ],
    credits: {
      enabled: false
    }
  })

  constructor() { }

  ngOnInit(): void {
  }

}
