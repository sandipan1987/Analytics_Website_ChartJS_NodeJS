import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import {ChartsModule} from './charts/charts.module';
import {DataServiceService} from './data-service.service';
import { MarqueeNotificationComponent } from './marquee-notification/marquee-notification.component';

@NgModule({
  declarations: [
    AppComponent,
    MarqueeNotificationComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    HttpClientModule
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})

export class AppModule { }
