import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  user = {  };
  spinner = false;
  spiner_body = true;
  _error = " ";
  loginbtn;

  constructor(private _auth_srv: AuthService, private _router: Router) { }

  ngOnInit() {
  }
  changebtn(){
    document.getElementById('login').innerText = "LOGINBTN";
  }
  userlogin(userdata) {
    this.spinner = true;
    this.spiner_body = false;


    this._auth_srv.userLogin(this.user)
      .subscribe(
        res => {
          this.spinner = false;

          console.log(res);
          console.log(res.token);
          console.log(res.user);
          localStorage.setItem("token", res.token);
          localStorage.setItem('user', JSON.stringify(res.user));
          // localStorage.setItem('id',res.id);
          localStorage.setItem('role',res.user.role);
          localStorage.setItem('name',res.user.name);
          localStorage.setItem('email',res.user.email);
          this._router.navigate(["/categories"]);
          // window.location.reload();
 
          

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
