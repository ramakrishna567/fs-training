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
  
  updateData;

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
  
  public updateUser(id,updateData){
    return this.http.put(this.usersUrl+"update/"+id, updateData);
  }

  public deleteUser(id){
    return this.http.delete(this.usersUrl+"delete/"+id);
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
