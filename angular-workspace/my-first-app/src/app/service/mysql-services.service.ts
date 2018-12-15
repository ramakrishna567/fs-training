import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MysqlServicesService {
  private _url_cust= "http://localhost:2020/sql/getdata";

  constructor( private http : HttpClient ) { }

  public getCustomers(){
    return this.http.get<any>(this._url_cust);
  }
}
