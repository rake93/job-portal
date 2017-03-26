import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { ApiService } from 'app/common/api.service';
declare var Highcharts:any;

@Component({
  selector: 'maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css'],
  providers : [ApiService]
})
export class MapsComponent {
    constructor(api: ApiService) {

    }
    ngAfterContentInit() {
        Highcharts.mapChart('mapsContainer', {
            title : {
                text : ''
            },
            mapNavigation: {
                enabled: false,
                buttonOptions: {
                    verticalAlign: 'bottom'
                }
            },
            colorAxis: {
                min: 0
            },
            series : [{
                data : [],
                mapData: Highcharts.maps['countries/us/us-ma-all'],
                joinBy: 'hc-key',
                name: 'Random data',
                states: {
                    hover: {
                        color: '#a4edba'
                    }
                },
                dataLabels: {
                    enabled: true,
                    format: '{point.name}'
                }
            }]
        });
    }
}
