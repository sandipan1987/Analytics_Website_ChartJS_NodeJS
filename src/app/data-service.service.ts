import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  public baseUrl:any = environment.baseUrl;
  public host:any= window.location.hostname;

  constructor(private httpClient:HttpClient) { }

  public getStoreNumber_uers_TC55_Count(){
    //return this.httpClient.get('../src/mockJson/StoreNumber_uers_TC55_Count.json');
    return this.httpClient.get(this.baseUrl + environment.endpoint.StoreNumber_uers_TC55_Count);
  }

  public getAppVersion_Stores(){
    //return this.httpClient.get('../src/mockJson/appVersion_Stores.json');
    return this.httpClient.get(this.baseUrl + environment.endpoint.appVersion_Stores);
  }

  public getAppVersion_TC55(){
    //return this.httpClient.get('../src/mockJson/appVersion_TC55.json');
    return this.httpClient.get(this.baseUrl + environment.endpoint.appVersion_TC55);
  }

  public getDevice_Store_Count(){
    //return this.httpClient.get('../src/mockJson/Device_Store_Count.json');
    return this.httpClient.get(this.baseUrl + environment.endpoint.Device_Store_Count);
  }

  public getDevice_MultipleStore(){
    //return this.httpClient.get('../src/mockJson/Device_MultipleStore.json');
    return this.httpClient.get(this.baseUrl + environment.endpoint.Device_MultipleStore);
  }

  public getLoginType_Appversion(){
    //return this.httpClient.get('../src/mockJson/LoginType_Appversion.json');
    return this.httpClient.get(this.baseUrl + environment.endpoint.LoginType_Appversion);
  }

  public getTC55_Browser(){
    //return this.httpClient.get('../src/mockJson/TC55_Browser.json');
    return this.httpClient.get(this.baseUrl + environment.endpoint.TC55_Browser);
  }

  public getTC55_Stores_Users(){
    //return this.httpClient.get('../src/mockJson/TC55_Stores_Users.json');
    return this.httpClient.get(this.baseUrl + environment.endpoint.TC55_Stores_Users);
  }

}
