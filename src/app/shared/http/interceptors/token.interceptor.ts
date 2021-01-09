import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/services/login/login.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private loginService: LoginService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.loginService.getToken();

    if (!token) {
      return next.handle(request);
    }

    const tokenRequest = request.clone({
      headers: new HttpHeaders({ Authorization: this.loginService.getToken() })
    });

    return next.handle(request);
  }
}
