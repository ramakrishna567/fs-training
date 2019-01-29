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
  finalTotal: number = 0;
  total: number = 0;
  cartProd: any = [];

  constructor(private messageService: CartSrvService, private _router: Router) {

 
    
  }

  // Removing cart Items using Array Splice Method
  removeCart(_id) {
    console.log(this.cartProd);

    for (let index = 0; index < this.cartProd.length; index++) {

      if (this.cartProd[index]._id === _id) {
        this.cartProd.splice(index, 1);
        console.log(this.cartProd);
      }
    this.findTotal();

    }
  }

  // Counting Total Price of All Products in Cart
  findTotal(){
    for (let i = 0; i < this.cartProd.length; i++) {
      this.total = this.total + this.cartProd[i].price;
      console.log("Price" + this.cartProd[i].price);
      console.log(this.total);
    }
    this.finalTotal = this.total

   }

  ngDoCheck() { 
   // Getting All Cart Products from Cart Service
   this.cartProd = this.messageService.sendCartProducts();
   console.log("products" + this.cartProd.length);
   this.findTotal();

   


   }
}
