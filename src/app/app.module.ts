import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SankeyChartComponent } from './sankey-chart/sankey-chart.component';
import { HighchartsChartModule } from 'highcharts-angular';

@NgModule({
  imports: [BrowserModule, FormsModule, HighchartsChartModule],
  declarations: [AppComponent, HelloComponent, SankeyChartComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
