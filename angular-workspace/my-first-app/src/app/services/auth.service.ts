import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EventEmitter } from 'events';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usersUrl = "http://localhost:2020/users/";
  
  userdata;
  user = {
    role : ""
  }
  
  constructor(private http: HttpClient) { }

  public getAllUsers(){
    return this.http.get<any>(this.usersUrl);
  }

  public userRegistration(user) {
    return this.http.post<any>(this.usersUrl+"new", user);
  }

  public userLogin(userdata){
    return this.http.post<any>(this.usersUrl+"login", userdata);
  }

  // public userLogin(userdata):Observable<boolean>{ 
  //   return this.http.post<any>(this.usersUrl+"login", userdata);
  // }

  logedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  userLogout() {
    return localStorage.clear();
  }

  userRole(){
    return localStorage.getItem("role");
  }

  userName(){
    return localStorage.getItem("name");
  }

}
