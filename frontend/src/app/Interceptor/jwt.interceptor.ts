import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<unknown>, next: HttpHandler) {

    const idToken = localStorage.getItem("id_token");



    if (idToken) {
      const cloned = req.clone({
        setHeaders: {
          'Authorization': 'Bearer: ' + idToken
        }
      });

      return next.handle(cloned);
    }
    else {
      return next.handle(req);
    }



  }
}
