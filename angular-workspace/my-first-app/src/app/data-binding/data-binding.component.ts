import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  _interpolation: number = 2500;
  _properyBind: string = "Property Binding We can not use html matter";
  mail: string;
  name: string;
  usrname: string;
  user: string = "";

  // Template variabel by one way data binding
  showEmail(userm) {
    console.log(userm.value);
  }
  // Oneway Data bind using $event
  showMail($event) {
    console.log($event);

    this.mail = $event.target.value
    console.log(this.mail);

  }

  // Twoway data bind using Property & $event Binding
  showName($event) {
    this.name = $event.target.value;
    console.log(this.name);
  }

  showMsg_2(username) {

    this.usrname = username.value;
    console.log(this.usrname);

  }
  constructor() { }

  ngOnInit() {

  }

}
