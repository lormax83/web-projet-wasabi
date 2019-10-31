import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  value = "";
  constructor(private http:HttpClient) { }

  ngOnInit() {
  }
  onSubmitGet(){
    var get = this.http.get('https://wasabi.i3s.unice.fr/search/fulltext/:'+this.value);
    get.subscribe((data: any[])=>{
      console.log(data);
      
    })
    
  }
}


