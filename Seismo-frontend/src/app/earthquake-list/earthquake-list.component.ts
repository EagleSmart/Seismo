import { Component, OnInit } from '@angular/core';

import { Earthquake } from '../../earthquake';

import { DataService } from '../data.service';

@Component({
  selector: 'app-earthquake-list',
  templateUrl: './earthquake-list.component.html',
  styleUrls: ['./earthquake-list.component.css'],
  providers: [DataService]
})
export class EarthquakeListComponent implements OnInit {
  earthquake_list: Earthquake[] = [] ;
  // earthquakes: Earthquake;

  
  constructor(private dataService: DataService) { }


  getEarthquakes(){
    this.dataService.getEarthquake()
    .subscribe((profiles:any[]) => {  
      this.earthquake_list = profiles;
      console.log('data from DataService: ' + this.earthquake_list);
    }) 
  }

  ngOnInit() {
    this.getEarthquakes();
  }

}
