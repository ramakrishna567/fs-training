import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FirstSrvService {

  private _products = [
    { name: "cars", price: 50000, rating: 5 },
    { name: "oldcars", price: 40000, rating: 4 },
    { name: "newcars", price: 30000, rating: 3 }
  ]
  constructor() { }
  public getProducts() {
    return this._products;
  }
}
