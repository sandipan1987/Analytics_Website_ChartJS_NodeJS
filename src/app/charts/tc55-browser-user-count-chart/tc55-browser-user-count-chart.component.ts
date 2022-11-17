import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataServiceService } from '../../data-service.service';
import Chart from 'chart.js';

@Component({
  selector: 'app-tc55-browser-user-count-chart',
  templateUrl: './tc55-browser-user-count-chart.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./tc55-browser-user-count-chart.component.css']
})
export class TC55BrowserUserCountChartComponent implements OnInit {

  public data: any
  public TC55Users: any;
  public WindowsUsers: any;

  constructor(private dataServiceService: DataServiceService) { }

  ngOnInit() {

    this.dataServiceService.getTC55_Browser().subscribe(
      (response) => {
        this.data = response;

        this.data.forEach(item => {
          if (item.DEVICE_TYPE === 'TC55') {
            this.TC55Users = item.USERS;
          }
          if (item.DEVICE_TYPE.toString().toUpperCase() === 'BROWSER') {
            this.WindowsUsers = item.USERS;
          }
        });

        var chartOptions = {
          responsive: true,
          legend: {
            position: "right"
          }
        }

        var ctx = document.getElementById('myChart_tc55_browser_user');
        var chart = new Chart(ctx, {
          // The type of chart we want to create
          type: 'pie',
          // The data for our dataset
          data: {
            datasets: [{
              data: [this.TC55Users, this.WindowsUsers],
              //for]
              backgroundColor: [
                'rgb(59, 77, 241)',
                'rgb(241, 147, 40)'
                ],

              borderColor: 'white',
              borderWidth: 1,
              label: 'TC55 vs Windows App',
              fill: 'start',
            }],

            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: [
              'TC55',
              'Windows App'  
            ]
          },

          // Configuration options go here
          options: chartOptions
        });
      },
      (error) => {

      }
    )


  }

}
