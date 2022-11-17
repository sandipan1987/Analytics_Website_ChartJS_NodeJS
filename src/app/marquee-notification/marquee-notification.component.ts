import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-marquee-notification',
  templateUrl: './marquee-notification.component.html',
  styleUrls: ['./marquee-notification.component.css']
})
export class MarqueeNotificationComponent implements OnInit {

  public marquee_array: any;
  constructor(private dataServiceService: DataServiceService) { }

  ngOnInit() {
    this.dataServiceService.getStoreNumber_uers_TC55_Count().subscribe(
      (response) => {
        this.marquee_array = response;
      },
      (error) => {

      }
    );
  }

}
