import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private registrationUrl = "http://localhost:2020/registration";
  private loginUrl = "http://localhost:3030/login";

  constructor(private http: HttpClient) { }
  public userRegistration(user) {
    return this.http.post<any>(this.registrationUrl, user);
  }

  public userLogin (user){
    return this.http.post(this.loginUrl, user);
  }
}
