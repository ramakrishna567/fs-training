import { Component, OnInit } from '@angular/core';
import { ProductsHttpService } from '../service/products-http.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {
  firstbind:string = "First Value";
  constructor(private http_srv : ProductsHttpService) { }

  ngOnInit() {
  }

}
