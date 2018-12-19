import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private registrationUrl = "http://localhost:2020/registration";
  private loginUrl = "http://localhost:2020/login";
  constructor(private http: HttpClient) { }

  public userRegistration(user) {
    return this.http.post<any>(this.registrationUrl, user);
  }

  public userLogin(userdata) {
    return this.http.post<{
      token: string,
      auth: boolean,
      message: string,
      user : {
        name : string,
        email : string
      }
    }>(this.loginUrl, userdata);
  }

  logedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  userLogout() {
    return localStorage.removeItem("token");
  }
}
