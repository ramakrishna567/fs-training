import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products = [
    {name : "old-car", price : 500000},
    {name : "new-car", price : 300000},
    {name : "antiquw", price : 200000},
    {name : "benz", price : 1500000}
  ]

  constructor() { }
  getProducts() {
    return this.products;
  }
}
