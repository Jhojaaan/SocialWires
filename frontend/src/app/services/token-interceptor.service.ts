import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {
  
  constructor(
    private authService: AuthService
  ) { }

  intercept(req: any, next:any){
    const tokennizeReq = req.clone({
      setHeaders:{
        Authorization: this.authService.getToken()
      }
    })


    return next.handle(tokennizeReq);
  }

}
