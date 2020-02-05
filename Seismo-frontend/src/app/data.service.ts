import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
// import  '@rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getComments(){
    return this.http.get('http://localhost:3000/api/comments');
  }

  getEarthquake(){
    return this.http.get('http://localhost:3000/api/earthquakes');
  }

  addComment(newComment){
    let headers = new HttpHeaders();
    return this.http.post('http://localhost:3000/api/comments', newComment, { headers: new HttpHeaders });
  }
}
