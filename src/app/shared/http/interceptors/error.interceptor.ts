import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorModel } from '../../models/errors/error.model';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private toastrService: ToastrService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {

        let errorTratado: ErrorModel;
        try {
          errorTratado = error.error as ErrorModel;
        } catch (e) {
          throwError(e);
        }

        switch (error.status) {
          case 401:
            this.toastrService.error(errorTratado.mensagem);
            return throwError(errorTratado.mensagem);
          case 404:
            this.toastrService.warning(errorTratado.mensagem);
            return throwError(errorTratado.mensagem);
          case 422:
            this.toastrService.warning(errorTratado.mensagem);
            return throwError(errorTratado.mensagem);
          default:
            this.toastrService.error('Erro desconhecido.');
            return throwError('Erro interno.');
        }
      })
    );
  }
}
