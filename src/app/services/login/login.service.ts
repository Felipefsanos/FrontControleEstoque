import { TokenModel } from './../../models/login/token.model';
import { Observable } from 'rxjs';
import { LoginCommand } from './../../models/login/commands/login-command.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from '../base/base-service';

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
}
