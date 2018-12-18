import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  products;
  myProducts;
  myCustomers;

  // We done with Injector Dependencies via Service
  constructor() {
    
    //   //When use service in construct then that service activate when we called
    // this.products = this.product_srv.getProducts();
    // // this.myProducts = this.http_prd_srv.getAllProducts();    
  }

  ngOnInit() {
    // Whenever user service in ngOnInit then that service actiate when application loaded
    // this.products = this.product_srv.getProducts();
  }

  // getProducts(){
  //   this.http_prd_srv.getAllProducts().subscribe(
  //     (res)=>{
  //       console.log(res);
  //       this.myProducts = res;
  //     },
  //     (err)=>{
  //       console.log(err);        
  //     }
  //   );
  // }

  // getCustomers(){
  //   this.sql_cust_srv.getCustomers().subscribe(
  //     (response)=>{
  //       console.log(response);
  //       this.myCustomers = response;
  //     },
  //     (error)=>{
  //       console.log(error);
  //     }
  //   )
  // }

}
