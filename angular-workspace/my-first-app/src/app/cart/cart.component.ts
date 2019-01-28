import { Component, OnInit, OnDestroy, OnChanges, DoCheck } from '@angular/core';
import { CartSrvService } from '../services/cart-srv.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements DoCheck {
  finalTotal : number = 0;
  total : number = 0;
  cartProd : any = [];

  constructor(private messageService: CartSrvService, private _router: Router) {
   
  }

ngDoCheck(){

  this.cartProd = this.messageService.sendCartProducts();
  console.log("products"+this.cartProd.length);
  
  for(let i=0;i<this.cartProd.length;i++){
    this.total=this.total + this.cartProd[i].price;
    console.log("Price"+ this.cartProd[i].price);
    console.log(this.total);
    
    
  }

  this.finalTotal=this.total
}
}
