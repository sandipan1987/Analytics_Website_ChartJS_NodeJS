import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataServiceService } from '../../data-service.service';
import Chart from 'chart.js';

@Component({
  selector: 'app-version-to-store-count-chart',
  templateUrl: './version-to-store-count-chart.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./version-to-store-count-chart.component.css']
})
export class VersionToStoreCountChartComponent implements OnInit {


  data: any;
  data_value: Array<any> = [];
  data_version: Array<any> = [];
  data_color: Array<any> = [];
  predefined_color_array: any = ['rgb(87, 219, 25)','#F1C40F', '#5499C7', 'red', '#E59866'];

  constructor(private dataServiceService: DataServiceService) { }

  ngOnInit() {

    this.dataServiceService.getAppVersion_Stores().subscribe(
      (response) => {
        this.data = response;
       
        for (var i = 0; i < this.data.length; i++) { 
          this.data_value.push(this.data[i].STORES);
          this.data_version.push(this.data[i].APP_VERSION);   
        }

        for (var i = 0; i < this.data_version.length; i++) {
          this.data_color.push(this.predefined_color_array[i]);
        }
 
        var chartOptions = {
          responsive: true,  
          legend: {
            position: "right"
          }
        }
      
        var ctx = document.getElementById('myChart_version_to_store_count');
        var chart = new Chart(ctx, {
          // The type of chart we want to create
          type: 'doughnut',
          // The data for our dataset
          data: {
            datasets: [{
              data: this.data_value,
              backgroundColor: this.data_color,
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
