import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartSrvService } from '../services/cart-srv.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnDestroy {
  
  message: any;
  subscription: Subscription;

  constructor(private messageService: CartSrvService) {
      // subscribe to home component messages
      this.subscription = this.messageService.getMessage()
      .subscribe(
        message => { 
          this.message = message;
          alert("hi");
          
        });
  }

  ngOnDestroy() {
      // unsubscribe to ensure no memory leaks
      this.subscription.unsubscribe();
  } 


}
