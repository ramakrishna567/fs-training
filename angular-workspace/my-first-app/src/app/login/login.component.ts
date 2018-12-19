import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  user = {};
  spinner = false;
  spiner_body = true;
  _error = " ";
  constructor(private _auth_srv: AuthService, private _router: Router) { }

  ngOnInit() {
  }

  userlogin(userdata) {
    this.spinner = true;
    this.spiner_body = false;

    this._auth_srv.userLogin(this.user)
      .subscribe(
        res => {
          this.spinner = false;


          console.log(res);
          this._router.navigate(["/categories"])
          console.log(res.token);
          console.log(res.user.name);
          localStorage.setItem("token", res.token);


        },
        err => {
          this.spinner = false;
          this.spiner_body = true;


          console.log(err);
          this._error = err.error.msg;
          console.log(err.error.msg);
          this._router.navigate(["/login"])

        }
      )
  }

}
