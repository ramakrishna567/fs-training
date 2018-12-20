import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
 employee = [
  { name : "John", age : 25},
  {name : "smith", age : 28 },
  {name : "Rohn", age : 35}
 ]
  constructor() { }

  ngOnInit() {
  }

}
