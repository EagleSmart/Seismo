import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Earthquake } from '../../earthquake';
import { Comments } from '../../comment';
import { format } from 'url';






@Component({
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit{
  earthquake_list: Earthquake[] = [] ;
  comments: Comments[] = [] ;
  constructor(private DataService: DataService) {}
  
  getComment(){
    this.DataService.getComments()
    .subscribe((profiles:any[]) => {
      this.comments = profiles;
    })
  }

  addComment(form){
    let newItem: Comments = {
      text:  form.value.itemName
    }
    this.DataService.addComment(newItem)
    .subscribe(item => {
      console.log(item);
      this.getComment();
    })
  }

  ngOnInit() {
    this.DataService.getEarthquake()
    .subscribe((profiles:any[]) => {
      this.earthquake_list = profiles;
    })
    this.DataService.getComments()
    .subscribe((profiles:any[]) => {
      this.comments = profiles;
    })



  }
}


