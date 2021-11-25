import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import * as HC_sankey from 'highcharts/modules/sankey';
HC_sankey(Highcharts);

@Component({
  selector: 'app-sankey-chart',
  templateUrl: './sankey-chart.component.html',
  styleUrls: ['./sankey-chart.component.css'],
})
export class SankeyChartComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    chart: {
      styledMode: false,
    },

    title: {
      text: '',
    },

    subtitle: {
      text: '',
    },

    series: [
      {
        keys: ['from', 'to', 'weight'],
        minLinkWidth: 50,
        dataLabels: {
          enabled: true,
        },
        data: [
          {
            from: 'Category=AdvFirewall',
            to: 'request_subject=10.136.112.114',
            weight: 329,
          },
          {
            from: 'Category=AdvFirewall',
            to: 'request_subject=others',
            weight: 16909,
          },
          {
            from: 'request_subject=10.136.112.114',
            to: 'month_of_year=December',
            weight: 104,
          },
          {
            from: 'request_subject=10.136.112.114',
            to: 'month_of_year=others',
            weight: 329 - 104,
          },

          { from: 'month_of_year=December', to: 'status=Fail', weight: 10 },
          { from: 'month_of_year=December', to: 'status=Pass', weight: 94 },
        ],
        nodes: [
          {
            id: 'Category=AdvFirewall',
            color: '#aaf4f3',
          },
          {
            id: 'request_subject=10.136.112.114',
            color: '#72edeb',
          },
          {
            id: 'request_subject=others',
            color: '#72edeb',
          },
          {
            id: 'month_of_year=December',
            color: '#39e6e3',
          },
          {
            id: 'month_of_year=others',
            color: '#39e6e3',
          },
          {
            id: 'status=Fail',
            color: '#f98686',
          },
          {
            id: 'status=Pass',
            color: '#89f655',
          },
        ],
        type: 'sankey',
        name: '',
      },
    ],
  };

  constructor() {}

  ngOnInit() {}
}
