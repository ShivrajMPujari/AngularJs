import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs/Observable';
import { ReadJsonService } from '../read-json.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
@Injectable()
export class HomeComponent implements OnInit {

  constructor(private jsonService : ReadJsonService ) {
   }
  public  products = [];

  //  displayJson(){
  //   this.jsonService.getJson().subscribe(
  //     (data) => this.products=data
  //   )
  //  }
  ngOnInit() {
    this.jsonService.getJson().subscribe(
      (data) => this.products=data
    )
  }

  fillerNav = Array(10).fill(0).map((_, i) => `Nav Item ${i + 1}`);

  fillerContent = Array(10).fill(0).map(() =>
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
   labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
   laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
   voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
   cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);

}
  
