import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-sankey-chart',
  templateUrl: './sankey-chart.component.html',
  styleUrls: ['./sankey-chart.component.css'],
})
export class SankeyChartComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts; // required
  chartConstructor: string = 'chart'; // optional string, defaults to 'chart'
  chartOptions: Highcharts.Options = {
    series: [
      {
        type: 'sankey',
        colors: [
          '#2f7ed8',
          '#0d233a',
          '#8bbc21',
          '#910000',
          '#1aadce',
          '#492970',
          '#f28f43',
          '#77a1e5',
          '#c42525',
          '#a6c96a',
        ],
        data: [
          {
            from: 'Category1',
            to: 'Category2',
            weight: 2,
          },
          {
            from: 'Category1',
            to: 'Category3',
            weight: 5,
          },
        ],
      },
    ],
  };
  chartCallback: Highcharts.ChartCallbackFunction = function (chart) {
    console.log('Chart rendered');
  }; // optional function, defaults to null
  updateFlag: boolean = false; // optional boolean
  oneToOneFlag: boolean = true; // optional boolean, defaults to false
  runOutsideAngularFlag: boolean = false; // optional boolean, defaults to false

  constructor() {}

  ngOnInit() {}
}
