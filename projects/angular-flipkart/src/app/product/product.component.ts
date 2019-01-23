import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
changePath : string= "http://localhost:4200/assets/images/laptops/img-1.jpeg ";
  constructor() { }
  changeImage($event){
    console.log($event);
    this.changePath = $event.target.src
    console.log(this.changePath);
    
  }
  ngOnInit() {
  }

}
