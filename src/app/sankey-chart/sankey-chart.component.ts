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
        data: [
          { from: 'Oil', to: 'Transportation', weight: 94 },
          { from: 'Natural Gas', to: 'Transportation', weight: 3 },
          { from: 'Coal', to: 'Transportation', weight: 0 },
          { from: 'Renewable', to: 'Transportation', weight: 0 },
          { from: 'Nuclear', to: 'Transportation', weight: 3 },
          { from: 'Oil', to: 'Industrial', weight: 41 },
          { from: 'Natural Gas', to: 'Industrial', weight: 40 },
          { from: 'Coal', to: 'Industrial', weight: 7 },
          { from: 'Renewable', to: 'Industrial', weight: 11 },
          { from: 'Nuclear', to: 'Industrial', weight: 0 },
          { from: 'Oil', to: 'Residential & Commercial', weight: 17 },
          { from: 'Natural Gas', to: 'Residential & Commercial', weight: 76 },
          { from: 'Coal', to: 'Residential & Commercial', weight: 1 },
          { from: 'Renewable', to: 'Residential & Commercial', weight: 7 },
          { from: 'Nuclear', to: 'Residential & Commercial', weight: 0 },
          { from: 'Oil', to: 'Electric Power', weight: 1 },
          { from: 'Natural Gas', to: 'Electric Power', weight: 18 },
          { from: 'Coal', to: 'Electric Power', weight: 48 },
          { from: 'Renewable', to: 'Electric Power', weight: 11 },
          { from: 'Nuclear', to: 'Electric Power', weight: 22 },
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
