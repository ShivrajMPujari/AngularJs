import { Component, OnInit } from '@angular/core';
import { ReadJsonService } from '../read-json.service';
import { IProducts } from '../product';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private jsonData : ReadJsonService) { 
 
  }
  items:IProducts[] =[];
  ngOnInit() {

    this.jsonData.getJson().subscribe(
      (data) => this.items = data
    );
  }

}
