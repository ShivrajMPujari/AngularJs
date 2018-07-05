import { Injectable } from '@angular/core';
import { IProducts } from './product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class ReadJsonService {

  constructor(private http : HttpClient) {

   }

getJson():Observable<IProducts[]>{
  return this.http.get<IProducts[]>("/assets/products.json")
}

}
