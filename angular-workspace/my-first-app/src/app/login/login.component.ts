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
  constructor(private _auth_srv : AuthService, private _router : Router) { }

  ngOnInit() {
  }

  userlogin(userdata){
    this._auth_srv.userLogin(this.user)
    .subscribe(
      res=>{
        console.log(res);
        this._router.navigate(["/categories"])
        console.log(res.token);
        console.log(res.user.name);
        localStorage.setItem("token", res.token);

        
      },
      err=>{
        console.log(err);
        this._router.navigate(["/login"])
        
      }
    )
  }

}
