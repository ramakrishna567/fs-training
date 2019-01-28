import { Component, OnInit, AfterViewChecked, OnChanges, DoCheck } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { CartSrvService } from '../services/cart-srv.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit, DoCheck {
  // user = JSON.parse(localStorage.getItem('user'));
  // user=localStorage.getItem('name')
   name: string = "";
   count : Number = 0;
   cartProd:any = [];
  constructor(public _auth: AuthService, private _carSrv : CartSrvService) {
     
  }

  ngOnInit() {
    // this.name = this._auth.userName();

  }

  ngDoCheck() {
    this.name = this._auth.userName();

    this.cartProd = this._carSrv.sendCartProducts();
    this.count = this.cartProd.length;
    console.log("count"+this.count);

    
  }
  
}
