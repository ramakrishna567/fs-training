import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { AuthService } from '../services/auth.service';
import { CartSrvService } from '../services/cart-srv.service';
import { Router } from '@angular/router';

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
  userData = {
    name: '',
    email: '',
    phoneNumber: Number
  }
  is_edit = true;
  value_email;
  id: string;
  _color = false;
  carData: any = [];
  spinner: boolean = true;



  constructor(private _products: ProductsService, private _auth: AuthService,
    private messageService: CartSrvService, private _router: Router) { }

  ngOnInit() {
    this._auth.currentSource.subscribe(message => {
      console.log(message);
      if (message) {
        console.log("hiii");
      }
    })
    this.getAllusers();
  }
  
  getAllProducts() {
    this._products.getAllProducts().subscribe(
      res => {
        this.products = res;
        this.spinner = false;
        console.log("first image" + this.products[0].image);

      },
      err => {
        this.spinner = true;
        console.log(err);

      }
    )
  }


  getAllusers() {
    this._auth.getAllUsers().subscribe(
      (result) => {
        console.log(result);
        this.users = result;
        console.log(result[0].email);
        this.value_email = result[0].email;
      },
      (errr) => {
        console.log(errr);

      }
    )
  }

  // Edit each user
  sendData(id) {
    this.id = id;
    this._color = false;
  }

  // UPDATE USER
  updateUser(id, name, email, phn) {
    this.userData.name = name;
    this.userData.email = email;
    this.userData.phoneNumber = phn;
    console.log(id, this.userData);

    this._auth.updateUser(id, this.userData).subscribe(res => {
      console.log(res);
      this.getAllusers();
      this.id = '';
      this._color = true;

    }, err => {
      console.log(err);

    })
  }

  // user delete
  deleteUser(id) {
    this._auth.deleteUser(id).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    )
  }

  sendMsg(_name) {
    // send message to subscribers via observable subject
    this.id = _name;
    // this.carData.push(this.id);
    this.messageService.cartProducts.push(this.id)
    // console.log(this.carData);
    this._router.navigate(['/cart']);

  }

  addProduct() {
    this._router.navigate(['admin/products']);
  }

  sendImg($event) {
    console.log($event);

  }
}
