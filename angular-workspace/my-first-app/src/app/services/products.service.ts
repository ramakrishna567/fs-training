import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
private _prodUrl = "http://localhost:2020/api/products";

  constructor(private http : HttpClient) { }

  public getAllProducts(){
    return this.http.get<any>(this._prodUrl);
  }
}
