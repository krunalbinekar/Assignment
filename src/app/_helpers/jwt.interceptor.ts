import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginServiceService } from '../services/login-service.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private service : LoginServiceService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const currentUser :any = this.service.currentUserValue;
        let headers_object = new HttpHeaders();
        headers_object.append('Content-Type', 'application/json');
        headers_object.append('Authorization', `Bearer` + currentUser);

        const httpOptions = {
            headers: headers_object
        };


        if (currentUser !== null && currentUser !== undefined  && currentUser["data"].token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser["data"].token}`
                }
            });
        }

    return next.handle(request);
  }
}
