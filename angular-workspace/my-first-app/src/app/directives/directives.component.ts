import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
 employees = [
  { name : "John", age : 25, sal : 50000}, 
  {name : "smith", age : 28, sal : 1000000 },
  {name : "Rohn", age : 35, sal : 80000}
 ]
 dataStatus = "name";
 status = false;
 isClick = true;

  constructor() { }

  ngOnInit() {
  }

}
