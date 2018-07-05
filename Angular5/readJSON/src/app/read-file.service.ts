import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IProducts } from './products';
@Injectable()
export class ReadFileService {

  constructor(private http : HttpClient) { }

  private _url:string ="/assets/products.json";
  getProducts():Observable<IProducts[]>{

    return this.http.get<IProducts[]>(this._url);
  }

}
