import { Component, OnInit } from '@angular/core';
import { DataServiceService } from './data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public title = 'StoreAppAnalytics';
  public store_count: any ;
  public tc55_count: any ;
  public users_count: any ;
  public store_notifiation_image_path: String = 'assets/images/store-icon.png';
  public tc55_notifiation_image_path: String = 'assets/images/tc55.png';
  public users_notifiation_image_path: String = 'assets/images/users.png';

  constructor(private dataServiceService: DataServiceService) { }
  
  ngOnInit() {

    this.dataServiceService.getTC55_Stores_Users().subscribe(
      (response) => {
        this.store_count = response[0].STORES;
        this.tc55_count = response[0].DEVICES;
        this.users_count = response[0].USERS;
      },
      (error) => {

      }
    );
    
  }
  
  
}

