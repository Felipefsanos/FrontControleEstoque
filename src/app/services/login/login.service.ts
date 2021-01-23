import { TokenModel } from './../../models/login/token.model';
import { Observable } from 'rxjs';
import { LoginCommand } from './../../models/login/commands/login-command.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from '../base/base-service';
import { AES } from 'crypto-ts';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends BaseService {

  constructor(protected http: HttpClient) {
    super(http);
  }

  public login(loginCommand: LoginCommand): Observable<TokenModel> {
    return this.post('login', loginCommand);
  }

  public saveToken(token: TokenModel): void {
    localStorage.setItem('tokenExpiration', token.dataExpiracao.toString());
    localStorage.setItem('token', AES.encrypt(token.token, this.tokenKey).toString());
  }

  public getToken(): string {
    const encriptyToken = localStorage.getItem('token');

    if (!encriptyToken) {
      return null;
    }

    return AES.decrypt(encriptyToken, this.tokenKey).toString();
  }

  public tokenExpired(): boolean {
    const tokenExpiration = localStorage.getItem('tokenExpiration');

    if (!tokenExpiration) {
      return true;
    }

    if (Date.parse(tokenExpiration) <= Date.now()) {
      return true;
    }

    return false;
  }

}
