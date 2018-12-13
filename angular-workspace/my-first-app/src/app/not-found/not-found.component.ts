import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {
  notFoundText: string = "Search Page is not Available";
  notFoundErrCode: number = 404;

  changeName(username){
    console.log(username);    
    console.log(username.value);    
  }
  constructor() { }

  ngOnInit() {
  }

}
