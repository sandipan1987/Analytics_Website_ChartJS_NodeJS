import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataServiceService } from '../../data-service.service';
import LoginType_Appversion from '../../../mockJson/LoginType_Appversion.json';
import Chart from 'chart.js';

@Component({
  selector: 'app-version-to-login-type-count-chart',
  templateUrl: './version-to-login-type-count-chart.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./version-to-login-type-count-chart.component.css']
})
export class VersionToLoginTypeCountChartComponent implements OnInit {

  constructor(private dataServiceService: DataServiceService) { }

  data: any;
  data_version: Array<any> = [];
  dataMap: {
    label: any,
    backgroundColor: any,
    borderColor: any,
    borderWidth: any,
    data: Array<any>
  }[] = [];
  storeMap = new Map();
  sortedStoreMap = new Map();
  dcMap = new Map();
  colorArray: Array<string> = ['rgb(87, 219, 25)','#F1C40F', '#5499C7', 'red'];
  counter: any = 0;

  ngOnInit() {

    this.dataServiceService.getLoginType_Appversion().subscribe(
      (response) => {
        this.data = response;

        for (var i = 0; i < this.data.length; i++) {
          this.data_version.push(this.data[i].APP_VERSION);
          if (this.data[i].SOURCE_TYPE == "DC") {
            this.dcMap.set(this.data[i].APP_VERSION, this.data[i].DEVICE);
            if (!this.storeMap.has(this.data[i].APP_VERSION)) {
              this.storeMap.set(this.data[i].APP_VERSION, 0);
            }
          }
          else if (this.data[i].SOURCE_TYPE == "STORE") {
            this.storeMap.set(this.data[i].APP_VERSION, this.data[i].DEVICE);
            if (!this.dcMap.has(this.data[i].APP_VERSION)) {
              this.dcMap.set(this.data[i].APP_VERSION, 0);
            }
          }
        }
        //debugger;

        var _this = this;
        //_this.sortedStoreMap = new Map([_this.storeMap.entries()].reverse());
        //_this.sortedStoreMap = Array.from(this.storeMap)].reverse();
        Array.from(this.storeMap).forEach(dataValue =>
          this.dataMap.push({
            "label": dataValue[0],
            "backgroundColor": _this.colorArray[_this.counter++],
            "borderColor": "white",
            "borderWidth": "1",
            "data": [
              dataValue[1], // Store Value
              _this.dcMap.get(dataValue[0]) // DC value
            ]
          })
        );
        var barChartData = {
          labels: [
            "Store",
            "DC"
          ],
          datasets: this.dataMap
        };

        var chartOptions = {
          responsive: true,
          legend: {
            position: "top"
          },
          title: {
            display: false,
            text: ""
          },

          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              },
              scaleLabel: {
                display: true,
                fontColor: '#196F3D',
                fontStyle: 'bold',
                labelString: 'TC55'
              }
            }],
            xAxes: [{
              scaleLabel: {
                display: true,
                fontColor: '#196F3D',
                fontStyle: 'bold',
                labelString: ''
              }
            }]
          }
        }

        window.onload = function () {
          var ctx = document.getElementById("myChart_version_to_login_type")
          var chart = new Chart(ctx, {
            type: "bar",
            data: barChartData,
            options: chartOptions
          });
        };
      },
      (error) => {

      }

    );

  }

}
