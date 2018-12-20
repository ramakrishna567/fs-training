import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user = {};


  constructor(private auth_srv: AuthService,
    private _router : Router) { }

  ngOnInit() {
  }

  registration() {
    this.auth_srv.userRegistration(this.user).subscribe(
      (res) => {
        console.log(res);
        this._router.navigate(['home'])
      },
      (err) => {
        console.log(err);
      }
    )
  }

  userLogin(){
    
  }

}
