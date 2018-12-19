import { Injectable,Injector} from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokeninterceptorService implements HttpInterceptor{

  constructor(private _injector:Injector) { }
  intercept(req,next){
    let _auth = this._injector.get(AuthService);
    
    let tokenizedReq = req.clone({
      setHeaders:{
        'x-access-token':`${_auth.getToken()}`
      }
    })
  
    return next.handle(tokenizedReq)
  }
}
