import { Component } from '@angular/core';
import { Item } from './items';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs/Observable';
import { ReadFileService } from './read-file.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public products =[];
  constructor(private readService :ReadFileService ){

  }
  
  ngOnInit(){
    this.readService.getProducts().subscribe(data => console.log(data));

  }
  //  constructor(private http: HttpClient) {
  //       this.getJSON().subscribe(data => {
  //           console.log(data)
  //       });
  //   }

  //   public getJSON(): Observable<any[]> {
  //     return this.http.get("src/assets/products.json");
  //   }
}
