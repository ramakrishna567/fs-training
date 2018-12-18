import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user = {};
  constructor(private _auth_srv : AuthService) { }

  ngOnInit() {
  }

  userlogin(){
    this._auth_srv.userLogin(this.user).subscribe(
      (res)=>{
        console.log(res);
        
      },
      (err)=>{
        console.log(err);
        
      }
    )
  }
}
