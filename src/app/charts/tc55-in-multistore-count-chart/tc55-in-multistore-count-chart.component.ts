import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataServiceService } from '../../data-service.service';
import Chart from 'chart.js';

@Component({
  selector: 'app-tc55-in-multistore-count-chart',
  templateUrl: './tc55-in-multistore-count-chart.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./tc55-in-multistore-count-chart.component.css']
})
export class TC55InMultistoreCountChartComponent implements OnInit {

  public data: any;
  public storeCount: Array<any> = [];
  public devices: Array<any> = [];

  constructor(private dataServiceService: DataServiceService) { }

  ngOnInit() {

    this.dataServiceService.getDevice_MultipleStore().subscribe(
      (response) => {
        this.data = response;

        for (var i = 0; i < this.data.length; i++) {
          this.storeCount.push(this.data[i].SOURCE);
          this.devices.push(this.data[i].DEVICE_ID);
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
               ticks: {
                 beginAtZero: true,
                 fontSize: 10
               },
               scaleLabel: {
                 display: true,
                 fontColor: '#196F3D',
                 fontStyle:'bold',
                 labelString: 'Stores'
               }
           }],
           xAxes: [{
            ticks: {
              beginAtZero: true,
              fontSize: 9
            },
             scaleLabel: {
               display: true,
               fontColor: '#196F3D',
               fontStyle:'bold',
               labelString: 'Device ID'
             }
           }]
         }
       }

        var ctx = document.getElementById('myChart_tc55_in_multistore');
        var chart = new Chart(ctx, {
          // The type of chart we want to create
          type: 'bar',
          // The data for our dataset
          data: {
            datasets: [{
              data: this.storeCount,
              backgroundColor: '#76448A',
              borderColor: '#F4F6F7',
              borderWidth: 1,
              
            }],

            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: this.devices
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
