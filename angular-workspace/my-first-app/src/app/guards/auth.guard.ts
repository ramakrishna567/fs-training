import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _auth: AuthService, private _router: Router) { }
 
  canActivate(): boolean {
    if (this._auth.getToken()) {
      return true;
    } else {
      this._router.navigate(["/login"]);
      return false;
    }
  }

}
