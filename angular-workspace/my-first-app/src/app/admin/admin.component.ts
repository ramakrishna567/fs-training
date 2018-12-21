import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  employees = [
    { name: "John", age: 25, sal: 50000 },
    { name: "smith", age: 28, sal: 1000000 },
    { name: "Rohn", age: 35, sal: 80000 }
  ]
  dataStatus = "name";
  status = false;
  isClick = true;
  products;
  users;
  constructor(private _products: ProductsService, private _auth : AuthService) {

    this._products.getAllProducts().subscribe(
      res => {
        console.log(res);
        this.products = res;

      },
      err => {
        console.log(err);

      }
    )

    this._auth.getAllUsers().subscribe(
      (result)=>{
        console.log(result);
        this.users = result;
      },
      (errr)=>{
        console.log(errr);
        
      }
    )
  }

  ngOnInit() {
  }

}
