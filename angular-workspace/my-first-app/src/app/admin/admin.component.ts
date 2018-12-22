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
  userData = {
    name: '',
    email: '',
    phoneNumber: Number
  }
  is_edit = true;
  value_email;
  id: string = '';
  _color = false;
  constructor(private _products: ProductsService, private _auth: AuthService) {

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

  ngOnInit() {
  }

}
