import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartSrvService } from '../services/cart-srv.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  message : any

  constructor(private messageService: CartSrvService, private _router: Router) {
  
  }

ngOnInit(){
  this.messageService.msg$
  .subscribe(
    res=>{
      console.log("Hi"+res);
      this.message = res;
      this._router.navigate(["/cart"]);


    },
    err=>{
      console.log(err);
      
    }
  )
}
}
