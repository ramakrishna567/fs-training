import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  // user = JSON.parse(localStorage.getItem('user'));
  // user=localStorage.getItem('name')
   name: string
  constructor(private _auth: AuthService) {
     
  }

  ngOnInit() {
    this.name = this._auth.userName();
  }
  
}
