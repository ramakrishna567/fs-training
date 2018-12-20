import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private _auth: AuthService, private _router: Router) { }

  // // creating Admin Guard to Admin URLS if the user admin
  canActivate(): boolean {
    if (this._auth.getToken && this._auth.userRole() == "admin") {
      return true;
    } else {
      return false;
    }
  }
}
