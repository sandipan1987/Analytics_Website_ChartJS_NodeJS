import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DataServiceService} from '../data-service.service';
import { VersionToTC55CountChartComponent } from './version-to-tc55-count-chart/version-to-tc55-count-chart.component';
import { TC55InMultistoreCountChartComponent } from './tc55-in-multistore-count-chart/tc55-in-multistore-count-chart.component';
import { VersionToStoreCountChartComponent } from './version-to-store-count-chart/version-to-store-count-chart.component';
import { VersionToLoginTypeCountChartComponent } from './version-to-login-type-count-chart/version-to-login-type-count-chart.component';
import { TC55BrowserUserCountChartComponent } from './tc55-browser-user-count-chart/tc55-browser-user-count-chart.component';
import { DeviceCountStoreCountChartComponent } from './device-count-store-count-chart/device-count-store-count-chart.component';
import { GenericIconCountComponent } from './generic-icon-count/generic-icon-count.component';

@NgModule({
  imports: [
    CommonModule
  ],
  providers : [DataServiceService],
  declarations: [VersionToTC55CountChartComponent, TC55InMultistoreCountChartComponent, VersionToStoreCountChartComponent, VersionToLoginTypeCountChartComponent, TC55BrowserUserCountChartComponent, DeviceCountStoreCountChartComponent, GenericIconCountComponent],
  exports : [VersionToTC55CountChartComponent, TC55InMultistoreCountChartComponent, VersionToStoreCountChartComponent, VersionToLoginTypeCountChartComponent, TC55BrowserUserCountChartComponent, DeviceCountStoreCountChartComponent, GenericIconCountComponent]
})
export class ChartsModule { }
