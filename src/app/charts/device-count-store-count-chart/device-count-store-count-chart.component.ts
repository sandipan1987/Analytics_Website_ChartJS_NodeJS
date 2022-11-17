import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataServiceService } from '../../data-service.service';
import Chart from 'chart.js';


@Component({
  selector: 'app-device-count-store-count-chart',
  templateUrl: './device-count-store-count-chart.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./device-count-store-count-chart.component.css']
})
export class DeviceCountStoreCountChartComponent implements OnInit {

  public data: any;
  public data_store: Array<any> = [];
  public data_device: Array<any> = [];

  constructor(private dataServiceService: DataServiceService) { }

  ngOnInit() {

    this.dataServiceService.getDevice_Store_Count().subscribe(
      (response) => {
        this.data = response;

        for (var i = 0; i < this.data.length; i++) {
          this.data_store.push(this.data[i].STORES);
          this.data_device.push(this.data[i].DEVICES);
        }


        var chartOptions = {
          responsive: true,
          legend: {
            display: false
          },
          title: {
            display: false,
            text: ""
          },
          
          scales: {
            yAxes: [{
               /*ticks: {
                 beginAtZero: true
               },*/
               scaleLabel: {
                 display: true,
                 fontColor: '#196F3D',
                 fontStyle:'bold',
                 labelString: 'Store Count '
               }
           }],
           xAxes: [{
             scaleLabel: {
               display: true,
               fontColor: '#196F3D',
               fontStyle:'bold',
               labelString: 'TC55 Count '
             }
           }]
         }
       }

        var ctx = document.getElementById('myChart_device_count_store_count');
        var chart = new Chart(ctx, {
          // The type of chart we want to create
          type: 'line',
          // The data for our dataset
          data: {
            datasets: [{
              data: this.data_store,
              backgroundColor: '#76448A',
              borderColor: '#F4F6F7',
              borderWidth: 2,
              /*label: 'DeviceCount vs StoreCount',*/
              fill: 'start',
            }],

            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: this.data_device
          },

          // Configuration options go here
          options: chartOptions
        });
      },
      (error) => {

      }
    );

  }

}
