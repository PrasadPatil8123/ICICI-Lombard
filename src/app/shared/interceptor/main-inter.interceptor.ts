import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable()
export class MainInterInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const loginToken = sessionStorage.getItem('token');
    console.log("JWT token:", loginToken);

    const modifiRequest = request.clone({
      setHeaders: {
        'Content-Type': 'application/json',
        'JWTToken': ` ${loginToken}`
      }
    })
    // console.log(modifiRequest);
    return next.handle(modifiRequest).pipe(
      tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          console.log(event);
        }
      })
    );
  }
}
