import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataServiceService } from '../../data-service.service';
import Chart from 'chart.js';

@Component({
  selector: 'app-version-to-tc55-count-chart',
  templateUrl: './version-to-tc55-count-chart.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./version-to-tc55-count-chart.component.css']
})
export class VersionToTC55CountChartComponent implements OnInit {

  data: any;
  data_value: Array<any> = [];
  data_version: Array<any> = [];

  constructor(private dataServiceService: DataServiceService) { }

  ngOnInit() {

    this.dataServiceService.getAppVersion_TC55().subscribe(
      (response) => {
        this.data = response;
        for (var i = 0; i < this.data.length; i++) {
          this.data_value.push(this.data[i].TC55);
          this.data_version.push(this.data[i].APP_VERSION);
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
                 beginAtZero: true
               },
               scaleLabel: {
                 display: true,
                 fontColor: '#196F3D',
                 fontStyle:'bold',
                 labelString: 'App Version Number '
               }
           }],
           xAxes: [{
             scaleLabel: {
               display: true,
               fontColor: '#196F3D',
                 fontStyle:'bold',
               labelString: 'Tc55 Count '
             }
           }]
         }
       }

        var ctx = document.getElementById('myChart_version_to_tc55');
        var chart = new Chart(ctx, {
          // The type of chart we want to create
          type: 'horizontalBar',
          // The data for our dataset
          data: {
            datasets: [{
              data: this.data_value,
              backgroundColor: '#76448A',
              borderColor: '#F4F6F7',
              borderWidth: 2,
              /*label: 'AppVersion vs TC55Count',*/
            }],

            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: this.data_version
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
