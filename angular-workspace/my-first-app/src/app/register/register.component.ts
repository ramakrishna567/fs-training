import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
notFoundText:string = "Search Page is not Available";
notFoundErrCode : number = 404;
  constructor() { }

  ngOnInit() {
  }

}
